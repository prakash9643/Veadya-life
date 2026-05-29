import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const heroProblems = [
	{
		id: 1,
		name: "Immunity Wellness",
		img: "/immunity.png",
		link: "/shop?problem=Immunity+Wellness",
	},
	{
		id: 2,
		name: "Digestive Wellness",
		img: "/digestive.png",
		link: "/shop?problem=Digestive+Wellness",
	},
	{
		id: 3,
		name: "Pain Reliever",
		img: "/pain.png",
		link: "/shop?problem=Pain+Reliever",
	},
	{
		id: 4,
		name: "Cardiac Wellness",
		img: "/cardiac.png",
		link: "/shop?problem=Cardiac+Wellness",
	},
	{
		id: 5,
		name: "Skin Wellness",
		img: "/skin.png",
		link: "/shop?problem=Skin+Wellness",
	},
	{
		id: 6,
		name: "Blood Purifier",
		img: "/blood.png",
		link: "/shop?problem=Blood+Purifier",
	},
];

const HeroCategories = () => {
	return (
		<section className="hero-cat-section">
			<div className="section-container">
				{/* Section Header */}
				<div className="section-header">
					<p className="section-eyebrow">
						<i className="fa-solid fa-leaf section-eyebrow-icon"></i>
						Shop by Concern{" "}
						<span className="eyebrow-dot">·</span> Targeted
						Care
					</p>
					<h2 className="section-title">Shop by Problem</h2>
					<p className="section-desc">
						Select a health concern to explore our specialized
						Ayurvedic juices, capsules, and drops.
					</p>
				</div>

				{/* Circular Category Cards Swiper Carousel */}
				<div className="hero-cat-swiper-wrap animate-fade-in">
					<Swiper
						modules={[Autoplay]}
						spaceBetween={20}
						slidesPerView={2}
						loop={true}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
							pauseOnMouseEnter: true,
						}}
						breakpoints={{
							480: {
								slidesPerView: 3,
								spaceBetween: 20,
							},
							768: {
								slidesPerView: 4,
								spaceBetween: 30,
							},
							1024: {
								slidesPerView: 5,
								spaceBetween: 30,
							},
							1200: {
								slidesPerView: 6,
								spaceBetween: 40,
							},
						}}
						className="swiper-categories"
					>
						{heroProblems.map((prob) => (
							<SwiperSlide key={prob.id}>
								<a
									href={prob.link}
									className="hero-cat-item"
								>
									<div className="hero-cat-circle">
										<img
											src={prob.img}
											alt={prob.name}
											className="hero-cat-img"
										/>
									</div>
									<p
										className="hero-cat-name text-center"
										style={{
											fontSize: "13.5px",
											fontFamily:
												'"Poppins", sans-serif',
											fontWeight: "500",
											color: "#1f362e",
										}}
									>
										{prob.name}
									</p>
								</a>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	);
};

export default HeroCategories;
