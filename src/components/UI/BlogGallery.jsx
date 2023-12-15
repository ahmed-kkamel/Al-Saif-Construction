import React, { useState } from "react";
import blogData from "./../../assets/data/blogData";
import "../../styles/gallery.css";
import { useParams } from "react-router-dom";
import { Col } from "reactstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const BlogGallery = () => {
	const { slug } = useParams();
	const singleBlogItem = blogData.find((item) => item.title === slug);
	const [clickedImage, setClickedImage] = useState(null);

	return (
		<>
			{singleBlogItem.gallery.map((item) => (
				<BlogItem item={item} key={item.id} setClickedImage={setClickedImage} />
			))}
			<div
				className="model"
				style={{ display: clickedImage ? "block" : "none" }}
			>
				<span onClick={() => setClickedImage(null)}>&times;</span>
				<LazyLoadImage src={clickedImage?.image} alt={clickedImage?.caption} />
			</div>
		</>
	);
};
const BlogItem = ({ item, setClickedImage }) => {
	return (
		<Col lg="4" md="6" sm="6" className="mb-5">
			<div className="imgs-container">
				<div className="img-box">
					<img
						src={item.image}
						alt={item.caption}
						onClick={() => setClickedImage(item)}
						effect="blur"
					/>
					<div className="caption">
						<h4>{item.caption}</h4>
					</div>
				</div>
			</div>
		</Col>
	);
};

export default BlogGallery;
