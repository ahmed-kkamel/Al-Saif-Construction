import React from "react";
import { Col } from "reactstrap";
import "../../styles/blog-item.css";
import { Link } from "react-router-dom";
import blogData from "../../assets/data/blogData";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const BlogList = () => {
	return (
		<>
			{blogData.map((item) => (
				<BlogItem item={item} key={item.id} />
			))}
		</>
	);
};

const BlogItem = ({ item }) => {
	const { imgUrl, title, description } = item;
	function cutStringAtDot(inputString) {
		const parts = inputString.split(".");
		return parts[0];
	}

	return (
		<Col lg="4" md="6" sm="6" className="mb-5">
			<div className="blog__item">
				<LazyLoadImage src={imgUrl} alt="خدماتنا" className="w-100" />
				<div className="blog__info p-3">
					<Link to={`/blogs/${title}`} className="blog__title">
						{title}
					</Link>
					<p className="section__description mt-3">
						{description.length > 100
							? cutStringAtDot(description)
							: description}
					</p>
					<Link to={`/blogs/${title}`} className="read__more">
						اقرأ المزيد
					</Link>
				</div>
			</div>
		</Col>
	);
};

export default BlogList;
