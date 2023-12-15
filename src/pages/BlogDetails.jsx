import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../styles/blog-details.css";
import { Container, Row, Col } from "reactstrap";
import blogData from "../assets/data/blogData.js";
import Helmet from "../components/Helmet/Helmet";
import BlogGallery from "../components/UI/BlogGallery.jsx";
import SpecialHeading from "../components/UI/SpecialHeading.jsx";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const BlogDetails = () => {
	const { slug } = useParams();
	const blog = blogData.find((blog) => blog.title === slug);
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [blog]);

	return (
		<Helmet title={blog.title}>
			<section>
				<Container>
					<Row>
						<Col lg="4" md="4">
							<div className="recent__post mb-4">
								<h5 className=" fw-bold text-center">جميع خدماتنا</h5>
							</div>
							{blogData.map((item) => (
								<div className="recent__blog-post mb-4" key={item.id}>
									<div className="recent__blog-item d-flex  gap-3">
										<LazyLoadImage
											src={item.imgUrl}
											alt="خدماتنا"
											className="w-25 rounded-2"
										/>
										<h6 className="d-flex align-items-center justify-content-end">
											<Link to={`/blogs/${item.title}`}>{item.title}</Link>
										</h6>
									</div>
								</div>
							))}
						</Col>
						<Col lg="8" md="8">
							<div className="blog__details">
								<LazyLoadImage
									src={blog.imgUrl}
									alt={blog.title}
									className="w-100"
								/>
								<h2 className="section__title mt-4">{blog.title}</h2>
								<p className="section__description">{blog.description}</p>
								<h6 className="ps-5 fw-normal">
									<blockquote className="fs-4">{blog.quote}</blockquote>
								</h6>
								<p className="section__description">{blog.description2}</p>
								<p className="section__description">{blog.description3}</p>
								<p className="section__description">{blog.description4}</p>
							</div>
						</Col>

						<Col lg="12" md="12" sm="12" className="mt-5 mb-5">
							<SpecialHeading />
						</Col>
						<BlogGallery />
					</Row>
				</Container>
			</section>
		</Helmet>
	);
};

export default BlogDetails;
