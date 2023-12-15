import React, { useState } from "react";
import workData from "../../assets/data/worksData";
import "../../styles/gallery.css";
import { useParams } from "react-router-dom";
import { Col } from "reactstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const WorkGallery = () => {
	const { slug } = useParams();
	const singleWorkItem = workData.find((item) => item.title === slug);
	const [clickedImage, setClickedImage] = useState(null);

	return (
		<>
			{singleWorkItem.gallery.map((item, index) => (
				<WorkItem item={item} key={index} setClickedImage={setClickedImage} />
			))}
			<div
				className="model"
				style={{ display: clickedImage ? "block" : "none" }}
			>
				<span onClick={() => setClickedImage(null)}>&times;</span>
				<LazyLoadImage src={clickedImage?.image} alt="Pop up" />
			</div>
		</>
	);
};

const WorkItem = ({ item, setClickedImage }) => {
	return (
		<Col lg="4" md="6" sm="6" className="mb-5">
			<div className="imgs-container">
				<div className="img-box">
					<LazyLoadImage
						src={item.image}
						alt={item.title}
						onClick={() => setClickedImage(item)}
					/>
					<div className="caption">
						<h4>{item.caption}</h4>
					</div>
				</div>
			</div>
		</Col>
	);
};

export default WorkGallery;
