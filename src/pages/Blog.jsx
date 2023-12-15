import React, { useEffect } from "react";
import { Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import BlogList from "../components/UI/BlogList";

const Blog = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<Helmet title="الخدمات">
			<CommonSection title="الخدمات" />
			<section>
				<Container>
					<Row>
						<BlogList />
					</Row>
				</Container>
			</section>
		</Helmet>
	);
};

export default Blog;
