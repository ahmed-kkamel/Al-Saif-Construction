import React from "react";
import "../styles/not-found.css";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

const NotFound = () => {
	return (
		<section className="page_404">
			<Container>
				<Row>
					<Col lg="12" md="12" sm="12">
						<div className="text-center">
							<div className="four_zero_four_bg lazy">
								<h1 className="text-center ">404</h1>
							</div>
							<div className="contant_box_404">
								<h2>Look like you're lost</h2>
								<p>the page you are looking for not avaible!</p>
								<Link to="/home" className="link_404">
									Go to Home
								</Link>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default NotFound;
