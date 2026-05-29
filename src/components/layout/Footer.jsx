import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<>
			<footer className="site-footer footer-inner">
				<div className="section-container">
					<div className="footer-grid">
						{/* Col 1: About */}
						<div>
							<Link
								to="/"
								className="footer-logo footer-logo-link"
							>
								<img
									src="/logo/bgremovepng.png"
									alt="Veadya"
									className="footer-logo-img"
								/>
								<small>
									Ancient Wisdom · Modern Form
								</small>
							</Link>
							<p className="footer-about-text">
								For over a decade, Veadya has bridged
								5,000-year-old Ayurvedic wisdom with
								modern botanical science — crafting
								high-potency formulas for your everyday
								ritual.
							</p>
							<div className="footer-certs">
								<span className="cert-badge">
									<i className="fa-solid fa-seedling"></i>{" "}
									100% Natural
								</span>
								<span className="cert-badge">
									<i className="fa-solid fa-shield-halved"></i>{" "}
									GMP Certified
								</span>
								<span className="cert-badge">
									<i className="fa-solid fa-flask-vial"></i>{" "}
									No Synthetics
								</span>
							</div>
							<div className="footer-socials">
								<a
									href="#"
									className="social-btn"
									aria-label="Instagram"
								>
									<i className="fa-brands fa-instagram"></i>
								</a>
								<a
									href="#"
									className="social-btn"
									aria-label="Facebook"
								>
									<i className="fa-brands fa-facebook-f"></i>
								</a>
								<a
									href="#"
									className="social-btn"
									aria-label="Pinterest"
								>
									<i className="fa-brands fa-pinterest-p"></i>
								</a>
								<a
									href="#"
									className="social-btn"
									aria-label="YouTube"
								>
									<i className="fa-brands fa-youtube"></i>
								</a>
							</div>
						</div>

						{/* Col 2: Explore */}
						<div className="footer-explore-col">
							<p className="footer-col-title">Explore</p>
							<ul className="footer-nav-list">
								<li>
									<Link to="/">
										Home{" "}
										<i className="fa-solid fa-arrow-right"></i>
									</Link>
								</li>
								<li>
									<Link to="/about">
										About Us{" "}
										<i className="fa-solid fa-arrow-right"></i>
									</Link>
								</li>
								<li>
									<Link to="/shop">
										Shop All{" "}
										<i className="fa-solid fa-arrow-right"></i>
									</Link>
								</li>
								<li>
									<a href="#">
										The Journal{" "}
										<i className="fa-solid fa-arrow-right"></i>
									</a>
								</li>
								<li>
									<Link to="/contact">
										Contact Us{" "}
										<i className="fa-solid fa-arrow-right"></i>
									</Link>
								</li>
							</ul>
						</div>

						{/* Col 3: Contact + Mosaic */}
						<div>
							<p className="footer-col-title">Contact</p>
							<ul className="footer-contact-list">
								<li className="footer-contact-item">
									<div className="c-icon">
										<i className="fa-solid fa-location-dot"></i>
									</div>
									<div>
										<div className="c-info-lbl">
											Address
										</div>
										<div className="c-info-val">
											42, Botanical Lane,
											Rishikesh,
											<br />
											Uttarakhand — 249 201
										</div>
									</div>
								</li>
								<li className="footer-contact-item">
									<div className="c-icon">
										<i className="fa-solid fa-envelope"></i>
									</div>
									<div>
										<div className="c-info-lbl">
											Email
										</div>
										<div className="c-info-val">
											<a href="mailto:hello@veadya.in">
												hello@veadya.in
											</a>
										</div>
									</div>
								</li>
								<li className="footer-contact-item">
									<div className="c-icon">
										<i className="fa-solid fa-phone"></i>
									</div>
									<div>
										<div className="c-info-lbl">
											Phone
										</div>
										<div className="c-info-val">
											<a href="tel:+911234567890">
												+91 12345 67890
											</a>
										</div>
									</div>
								</li>
							</ul>

							<div className="mosaic-row">
								<span className="mosaic-lbl">
									@Veadya
								</span>
								<a href="#" className="mosaic-follow">
									Follow
								</a>
							</div>
							<div className="footer-mosaic">
								<div className="mosaic-img">
									<img src="/p-1.png" alt="" />
								</div>
								<div className="mosaic-img">
									<img src="/p-3.png" alt="" />
								</div>
								<div className="mosaic-img">
									<img src="/p-4.png" alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>

			<div className="copyright-strip">
				<div className="section-container copyright-inner">
					<p className="copyright-text">
						© 2026 <strong>Veadya</strong>. All rights
						reserved.
					</p>
					<p className="copyright-made">
						<i className="fa-solid fa-leaf"></i> Made with
						intention in India · 100% Natural · GMP Certified
					</p>
				</div>
			</div>
		</>
	);
};

export default Footer;
