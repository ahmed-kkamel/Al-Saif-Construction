import React from "react";
import Slider from "react-slick";
import { Container } from "reactstrap";
import "../../styles/hero-slider.css";
import SocialLinks from "./SocialLinks";

const HeroSlider = () => {
	const settings = {
		fade: true,
		speed: 2000,
		autoplaySpeed: 3000,
		infinite: true,
		autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		pauseOnHover: false,
	};
	return (
		<div className="hero__slider">
			<Slider {...settings}>
				<div className="slider__item slider__item-01 mt0">
					<Container>
						<div className="slider__content ">
							<h2 className="text-light mb-4 ">السيف للمعمار</h2>
							<h4 className="text-light mb-3">
								أعمال توريد وتركيب أسقف معلقه جبسوم بورد راقية
							</h4>
						</div>
					</Container>
				</div>

				<div className="slider__item slider__item-02 mt0">
					<Container>
						<div className="slider__content ">
							<h2 className="text-light mb-4">السيف للمعمار</h2>
							<h4 className="text-light mb-3">
								التميز في افضل انواع الدهانات العالمية
							</h4>
						</div>
					</Container>
				</div>

				<div className="slider__item slider__item-03 mt0">
					<Container>
						<div className="slider__content ">
							<h2 className="text-light mb-4">السيف للمعمار</h2>
							<h4 className="text-light mb-3">
								نعمل على تعزيز راحة عملائنا سواء كانوا أفراد أو شركات
							</h4>
						</div>
					</Container>
				</div>
			</Slider>
			<SocialLinks />
		</div>
	);
};

export default HeroSlider;
