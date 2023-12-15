import React, { useEffect } from "react";
import workData from "../assets/data/worksData";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom";
import SpecialHeading from "../components/UI/SpecialHeading";
import WorkGallery from "../components/UI/WorkGallery";
import "../styles/work-details.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const WorkDetails = () => {
	const { slug } = useParams();

	const singleWorkItem = workData.find((item) => item.title === slug);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [singleWorkItem]);

	return (
		<Helmet title={singleWorkItem.title}>
			<section className="work_section">
				<Container>
					<Row>
						<Col lg="6">
							<LazyLoadImage
								src={singleWorkItem.imgUrl}
								alt="section"
								className="w-100"
								effect="blur"
							/>
						</Col>

						<Col lg="6">
							<div className="work__info">
								<h2 className="section__title text-center mb-4">
									{singleWorkItem.title}
								</h2>
								<p className="section__description">
									{singleWorkItem.description}
								</p>
								<p className="section__description">
									{singleWorkItem.description1}
								</p>
								<p className="section__description">
									{singleWorkItem.description2}
								</p>
							</div>
						</Col>
						<Col lg="12" md="12" sm="12" className="mt-4 mb-5">
							<SpecialHeading />
						</Col>

						<WorkGallery />
					</Row>
				</Container>
			</section>
		</Helmet>
	);
};

export default WorkDetails;
