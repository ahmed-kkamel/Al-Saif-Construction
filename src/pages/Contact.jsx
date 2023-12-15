import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/contact.css";
import MiniSocialLinks from "../components/UI/MiniSocialLinks";
const Contact = ({ socialLinks }) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<Helmet title="تواصل معنا">
			<CommonSection title="تواصل معنا" />
			<section>
				<Container>
					<Row>
						<Col lg="7" md="7" className="mb-5">
							<div className="map-responsive">
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3508.518697559166!2d45.96490187549352!3d28.433776375773874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDI2JzAxLjYiTiA0NcKwNTgnMDIuOSJF!5e0!3m2!1sen!2seg!4v1702430343379!5m2!1sen!2seg"
									width="600"
									height="450"
									allowFullScreen=""
									loading="lazy"
									referrerPolicy="no-referrer-when-downgrade"
									title="موقع المكتب"
								></iframe>
							</div>
						</Col>
						<Col lg="4" md="4" sm="6">
							<div className="content">
								<div className="content-details">
									<div className="address details">
										<i className="ri-map-pin-line"></i>
										<div className="topic">العنوان</div>
										<div className="text">
											حفر الباطن العزيزيه اشارة الحويلا
										</div>
										<div className="text">
											خلف فندق بنان وبجانب شعبيات اليمن
										</div>
									</div>
									<div className="phone details">
										<i className="ri-phone-line"></i>
										<div className="topic">الهاتف</div>
										<div className="text number">
											<a href="tel:+966562084497">+966 56 208 4497</a>
										</div>
										<div className="text number">
											<a href="tel:+966533509594">+966 53 350 9594</a>
										</div>
									</div>
									<div className="email details">
										<i className="ri-time-line"></i>
										<div className="topic">مواعيد العمل</div>
										<div className="text">السبت - الخميس</div>
										<div className="text">7AM - 8PM</div>
									</div>

									<MiniSocialLinks socialLinks={socialLinks} />
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</Helmet>
	);
};

export default Contact;
