import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/work-item.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const WorkItem = (props) => {
	const { imgUrl, title, description } = props.item;
	function cutStringAtDot(inputString) {
		const parts = inputString.split(".");
		return parts[0];
	}
	return (
		<Col lg="4" md="6" sm="6" className="mb-5">
			<div className="work__item">
				<div className="work__img">
					<LazyLoadImage src={imgUrl} alt="اعمالنا" className="w-100" />
				</div>
				<div className="work__item-content mt-4">
					<h4 className="section__title text-center">{title}</h4>
					<p className="section__description text-center mb-4">
						{description.length > 100
							? cutStringAtDot(description)
							: description}
					</p>
					<Link to={`/work/${title}`} className="read__more">
						اقرأ المزيد
					</Link>
				</div>
			</div>
		</Col>
	);
};

export default WorkItem;
