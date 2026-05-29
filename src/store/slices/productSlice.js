import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { shopifyService } from "../../services/shopify";

// Asynchronous Redux Thunk to fetch products dynamically from Shopify Headless API
export const fetchProductsThunk = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      return await shopifyService.fetchProducts();
    } catch (error) {
      return rejectWithValue(error.message || "Failed to load products from Shopify Storefront");
    }
  }
);

const initialState = {
	items: [
		{
			id: 1,
			tag: "Capsule",
			name: "Sensex+",
			price: 499,
			image: "/p-1.png",
			category: "Capsule",
			problem: "Men Wellness",
			shortDescription:
				"Supports stamina, vitality, strength, and daily performance naturally.",
		},
		{
			id: 2,
			tag: "Capsule",
			name: "Bowlease+",
			price: 549,
			image: "/p-2.png",
			category: "Capsule",
			problem: "Digestive Wellness",
			shortDescription:
				"Helps improve bowel movement and supports complete digestive comfort.",
		},
		{
			id: 3,
			tag: "Capsule",
			name: "Calmiva+",
			price: 599,
			image: "/p-3.png",
			category: "Capsule",
			problem: "Stress Relief",
			shortDescription:
				"Promotes relaxation, better sleep quality, and emotional balance.",
		},
		{
			id: 4,
			tag: "Juice",
			name: "Livo De+ Juice",
			price: 689,
			image: "/p-4.png",
			category: "Juice",
			problem: "Liver Wellness",
			shortDescription:
				"Supports liver detoxification and improves overall metabolic health.",
		},
		{
			id: 5,
			tag: "Juice",
			name: "IBGS+ Juice",
			price: 729,
			image: "/p-5.png",
			category: "Juice",
			problem: "Gut Wellness",
			shortDescription:
				"Enhances digestion, gut balance, and nutrient absorption naturally.",
		},
		{
			id: 6,
			tag: "Capsule",
			name: "Cardeva HRT+",
			price: 649,
			image: "/p-6.png",
			category: "Capsule",
			problem: "Heart Wellness",
			shortDescription:
				"Supports healthy circulation and strengthens cardiovascular function.",
		},
		{
			id: 7,
			tag: "Juice",
			name: "Gluvora DB+",
			price: 799,
			image: "/p-7.png",
			category: "Juice",
			problem: "Diabetic Care",
			shortDescription:
				"Helps maintain healthy sugar levels and supports metabolic wellness.",
		},
	],
	loading: false,
	error: null,
};

const productSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		setProducts: (state, action) => {
			state.items = action.payload;
		},
	},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductsThunk.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchProductsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
