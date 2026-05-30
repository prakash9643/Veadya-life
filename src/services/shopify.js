/**
 * Headless Shopify Storefront API Service Client
 * Handles dynamic product fetching, product details resolving, and checkout url generation.
 * Features a seamless mock database fallback if Storefront credentials are not configured.
 */

// 1. Load credentials from environment
const STORE_DOMAIN = import.meta.env.VITE_SHOPIFY_STORE_DOMAIN || '';
const ACCESS_TOKEN = import.meta.env.VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN || '';

// Clean the domain to ensure it has standard myshopify format
const getShopifyEndpoint = () => {
  if (!STORE_DOMAIN) return '';
  let cleanDomain = STORE_DOMAIN.trim()
    .replace(/^https?:\/\//i, '') // remove protocol prefix if present
    .replace(/\/+$/, '')         // remove trailing slashes
    .replace(/\.+/g, '.');       // collapse multiple consecutive dots into a single dot
    
  if (!cleanDomain.includes('.myshopify.com')) {
    cleanDomain = `${cleanDomain}.myshopify.com`;
  }
  return `https://${cleanDomain}/api/2024-01/graphql.json`;
};

const isConfigured = () => {
  return STORE_DOMAIN.trim() !== '' && ACCESS_TOKEN.trim() !== '';
};

// 2. Original high-fidelity botanical mock data mapping Shopify payloads
const MOCK_SHOPIFY_PRODUCTS = [
  {
    id: 1,
    tag: "Capsule",
    name: "Sensex+",
    price: 499,
    image: "/p-1.png",
    category: "Capsule",
    problem: "Men Wellness",
    shortDescription: "Supports stamina, vitality, strength, and daily performance naturally."
  },
  {
    id: 2,
    tag: "Capsule",
    name: "Bowlease+",
    price: 549,
    image: "/p-2.png",
    category: "Capsule",
    problem: "Digestive Wellness",
    shortDescription: "Helps improve bowel movement and supports complete digestive comfort."
  },
  {
    id: 3,
    tag: "Capsule",
    name: "Calmiva+",
    price: 599,
    image: "/p-3.png",
    category: "Capsule",
    problem: "Stress Relief",
    shortDescription: "Promotes relaxation, better sleep quality, and emotional balance."
  },
  {
    id: 4,
    tag: "Juice",
    name: "Livo De+ Juice",
    price: 689,
    image: "/p-4.png",
    category: "Juice",
    problem: "Liver Wellness",
    shortDescription: "Supports liver detoxification and improves overall metabolic health."
  },
  {
    id: 5,
    tag: "Juice",
    name: "IBGS+ Juice",
    price: 729,
    image: "/p-5.png",
    category: "Juice",
    problem: "Gut Wellness",
    shortDescription: "Enhances digestion, gut balance, and nutrient absorption naturally."
  },
  {
    id: 6,
    tag: "Capsule",
    name: "Cardeva HRT+",
    price: 649,
    image: "/p-6.png",
    category: "Capsule",
    problem: "Heart Wellness",
    shortDescription: "Supports healthy circulation and strengthens cardiovascular function."
  },
  {
    id: 7,
    tag: "Juice",
    name: "Gluvora DB+",
    price: 799,
    image: "/p-7.png",
    category: "Juice",
    problem: "Diabetic Care",
    shortDescription: "Helps maintain healthy sugar levels and supports metabolic wellness."
  }
];

// Helper to query Shopify's GraphQL API
const shopifyFetch = async (query, variables = {}) => {
  const endpoint = getShopifyEndpoint();
  if (!endpoint) {
    throw new Error("Shopify Domain is not configured.");
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': ACCESS_TOKEN,
      },
      body: JSON.stringify({ query, variables }),
    });

    if (!response.ok) {
      throw new Error(`Shopify API error: HTTP status ${response.status}`);
    }

    const json = await response.json();
    if (json.errors) {
      console.error("Shopify GraphQL Errors:", json.errors);
      throw new Error(json.errors[0]?.message || "GraphQL Query Error");
    }

    return json.data;
  } catch (error) {
    console.error("Shopify Connection Failed:", error);
    throw error;
  }
};

// Primary head API services
export const shopifyService = {
  /**
   * Check if storefront API credentials have been provided by the developer
   */
  isClientConfigured: () => {
    return isConfigured();
  },

  /**
   * Fetches all shopify products and converts them to Veadya's UI schemas.
   */
  fetchProducts: async () => {
    if (!isConfigured()) {
      console.log("Shopify Headless: Missing API keys. Initializing fail-safe botanical mock fallback.");
      return MOCK_SHOPIFY_PRODUCTS;
    }

    const query = `
      query getProducts {
        products(first: 20) {
          edges {
            node {
              id
              title
              handle
              description
              productType
              tags
              images(first: 4) {
                edges {
                  node {
                    url
                  }
                }
              }
              variants(first: 1) {
                edges {
                  node {
                    id
                    price {
                      amount
                    }
                  }
                }
              }
            }
          }
        }
      }
    `;

    try {
      const data = await shopifyFetch(query);
      const edges = data?.products?.edges || [];
      
      // If store is empty, fallback gracefully
      if (edges.length === 0) {
        return MOCK_SHOPIFY_PRODUCTS;
      }

      return edges.map(({ node }, index) => {
        const variant = node.variants?.edges?.[0]?.node;
        const images = node.images?.edges?.map(e => e.node?.url).filter(Boolean) || [];
        const imageUrl = images[0];
        
        // Match specific concerns from tags
        const wellnessConcern = node.tags?.find(t => 
          t.toLowerCase().includes('wellness') || 
          t.toLowerCase().includes('care') || 
          t.toLowerCase().includes('relief')
        ) || 'Daily Wellness';

        return {
          id: index + 1, // preserve incremental IDs for local route matchers
          shopifyId: node.id,
          variantId: variant?.id || '',
          handle: node.handle,
          tag: node.productType || 'Remedy',
          name: node.title,
          price: Math.round(parseFloat(variant?.price?.amount || 0)) || 499,
          image: imageUrl || `/p-${(index % 7) + 1}.png`, // match fallback assets
          images: images,
          category: node.productType || 'Capsule',
          problem: wellnessConcern,
          shortDescription: node.description || 'Premium organic Ayurvedic formulation.'
        };
      });
    } catch (error) {
      console.warn("Shopify Headless integration error. Falling back to botanical mock data:", error);
      return MOCK_SHOPIFY_PRODUCTS;
    }
  },

  /**
   * Generates a secure e-commerce checkout link for custom carts.
   * Creates a checkout cart via Shopify mutation and resolves its webUrl.
   */
  createCheckout: async (cartItems) => {
    if (!isConfigured()) {
      return null;
    }

    const lines = cartItems.map(item => {
      // If we don't have a variant ID, construct a mock one for testing
      const variantId = item.variantId || `gid://shopify/ProductVariant/${item.id}`;
      return {
        merchandiseId: variantId,
        quantity: item.quantity
      };
    });

    const mutation = `
      mutation cartCreate($input: CartInput!) {
        cartCreate(input: $input) {
          cart {
            id
            checkoutUrl
          }
          userErrors {
            field
            message
          }
        }
      }
    `;

    try {
      const variables = { input: { lines } };
      const data = await shopifyFetch(mutation, variables);
      
      const cart = data?.cartCreate?.cart;
      const userErrors = data?.cartCreate?.userErrors || [];
      
      if (userErrors.length > 0) {
        console.error("Shopify Checkout user errors:", userErrors);
        throw new Error(userErrors[0]?.message || "Cart creation failed");
      }
      
      return cart?.checkoutUrl || null;
    } catch (error) {
      console.error("Shopify cart creation failed:", error);
      return null;
    }
  }
};
