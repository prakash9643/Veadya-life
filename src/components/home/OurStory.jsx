import React from "react";

const OurStory = () => {
	return (
		<section className="founder-section">
			<div className="founder-inner">
				<div className="founder-img-wrap">
					<img
						src="/all-juices.png"
						alt="Veadya Wellness"
						className="founder-img"
					/>
				</div>

				<div className="founder-text">
					<p className="founder-eyebrow">
						<i className="fa-solid fa-seedling text-[8px]"></i>
						Pure Botanicals · Ancient Wisdom
					</p>
					<h2 className="founder-heading">
						Elevate Your Daily Wellness
						<em className="block text-xl opacity-80 mt-1 font-normal font-sans tracking-[0.1em] uppercase">
							100% Organic Rituals
						</em>
					</h2>
					<p className="founder-para">
						Discover our collection of nutrient-rich
						cold-pressed juices, high-potency drops, and
						precision-dosed capsules. Formulated using
						authentic Ayurvedic principles to restore balance,
						enhance energy, and build lasting vitality.
					</p>
					<div className="founder-pills mt-6 mb-6">
						<span className="founder-pill">
							<i className="fa-solid fa-leaf"></i> 100%
							Organic
						</span>
						<span className="founder-pill">
							<i className="fa-solid fa-shield-halved"></i>{" "}
							GMP Certified
						</span>
						<span className="founder-pill">
							<i className="fa-solid fa-flask-vial"></i>{" "}
							Lab Tested
						</span>
					</div>
					<div className="founder-cta-row">
						<a href="/shop" className="founder-btn-primary">
							Shop All Rituals{" "}
							<i className="fa-solid fa-arrow-right text-[9px]"></i>
						</a>
						<a href="/about" className="founder-btn-ghost">
							Our Philosophy{" "}
							<i className="fa-solid fa-arrow-right text-[9px]"></i>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default OurStory;
