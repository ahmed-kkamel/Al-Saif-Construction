import React, { useEffect } from "react";
import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import AboutSection from "../components/UI/AboutSection";
import Testimonial from "../components/UI/Testimonial";
import BlogList from "../components/UI/BlogList";
import workData from "../assets/data/worksData";
import WorkItem from "../components/UI/WorkItem";

const Home = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<Helmet title="الرئيسيه">
			{/* ============= hero section =========== */}
			<section className="p-0 hero__slider-section">
				<HeroSlider />
			</section>
			{/* =========== about section ================ */}
			<AboutSection />
			{/* =========== our work section ============= */}
			<section>
				<Container>
					<Row>
						<Col lg="12" className="text-center mb-5">
							<h6 className="section__subtitle">أعمالنا</h6>
							<h2 className="section__title">معرض إنجازات أعمالنا المميزه</h2>
						</Col>
						{workData.slice(0, 6).map((item) => (
							<WorkItem item={item} key={item.id} />
						))}
					</Row>
				</Container>
			</section>
			{/* =============== blog section =========== */}
			<section>
				<Container>
					<Row>
						<Col lg="12" className="mb-5 text-center">
							<h6 className="section__subtitle">خدماتنا</h6>
							<h2 className="section__title">استفد من تنوع خبراتنا</h2>
						</Col>
						<BlogList />
					</Row>
				</Container>
			</section>
			{/* =========== clients reviews section =========== */}
			<section>
				<Container>
					<Row>
						<Col lg="12" className="mb-4 text-center">
							<h6 className="section__subtitle">أراء عملائنا</h6>
							<h2 className="section__title">تجارب بعض العملاء السابقين</h2>
						</Col>
						<Testimonial />
					</Row>
				</Container>
			</section>
		</Helmet>
	);
};

export default Home;
