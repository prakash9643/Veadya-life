import React from "react";

const categories = [
	{
		id: 1,
		title: "Botanical Drops",
		desc: "Fast-absorbing liquid extracts for maximum bioavailability — your daily ritual in a single dropper.",
		img: "/drops.png",
		link: "/shop?category=Drop",
		btnText: "SHOP DROPS",
	},
	{
		id: 2,
		title: "Herbal Capsules",
		desc: "Precision-dosed botanical capsules for effortless, consistent wellness.",
		img: "/capsules.png",
		link: "/shop?category=Capsule",
		btnText: "SHOP CAPSULES",
	},
	{
		id: 3,
		title: "Cold-Pressed Juices",
		desc: "Nutrient-rich Ayurvedic elixirs crafted fresh from whole botanicals.",
		img: "/juices.png",
		link: "/shop?category=Juice",
		btnText: "SHOP JUICES",
	},
];

const Categories = () => {
	return (
		<section className="categories-section">
			<div className="section-container">
				<div className="section-header">
					<p className="section-eyebrow">
						<i className="fa-solid fa-leaf section-eyebrow-icon"></i>
						Shop by Format{" "}
						<span className="eyebrow-dot">·</span> Veadya
						Collections
					</p>
					<h2 className="section-title">
						Find Your Perfect Ritual Format
					</h2>
					<p className="section-desc">
						From fast-absorbing drops to convenient capsules
						and revitalizing juices — choose the format that
						fits your lifestyle and wellness goals.
					</p>
				</div>
				<div className="cat-grid-wrapper">
					{/* Main Card */}
					<a href={categories[0].link} className="cat-card">
						<img
							src={categories[0].img}
							alt={categories[0].title}
						/>
						<div className="cat-card-overlay" />
						<div className="cat-card-content">
							<h3 className="cat-card-title">
								{categories[0].title}
							</h3>
							<p className="cat-card-desc">
								{categories[0].desc}
							</p>
							<span className="cat-card-link">
								{categories[0].btnText}{" "}
								<i className="fa-solid fa-arrow-right" />
							</span>
						</div>
					</a>

					{/* Right Column */}
					<div className="cat-right-col">
						{categories.slice(1).map((cat) => (
							<a
								key={cat.id}
								href={cat.link}
								className="cat-card"
							>
								<img src={cat.img} alt={cat.title} />
								<div className="cat-card-overlay" />
								<div className="cat-card-content">
									<h3 className="cat-card-title">
										{cat.title}
									</h3>
									<p className="cat-card-desc">
										{cat.desc}
									</p>
									<span className="cat-card-link">
										{cat.btnText}{" "}
										<i className="fa-solid fa-arrow-right" />
									</span>
								</div>
							</a>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Categories;
