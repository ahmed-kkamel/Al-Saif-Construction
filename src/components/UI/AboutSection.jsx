import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/download.jpeg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const AboutSection = ({ aboutClass }) => {
	return (
		<section
			className="about__section"
			style={
				aboutClass === "aboutPage"
					? { marginTop: "0px" }
					: { marginTop: "60px" }
			}
		>
			<Container>
				<Row>
					<Col lg="6" md="12 mb-3">
						<div className="about__section-content">
							<h1 className="section__subtitle text-center mb-4">
								السيف للمعمار
							</h1>
							<h2 className="section__title mb-3">
								نحن في السيف للمعمار نفتخر بتقديم خدمات التشطيبات عالية الجودة،
								حيث نجمع بين الإبداع والاحترافية لتحقيق تصاميم داخلية مذهلة.
							</h2>
							<p className="section__description">
								مع خبرتنا الواسعة والمهارات الفنية المتقدمة، نلتزم في السيف
								للمعمار بتحويل أي مساحة إلى عمل فني يعكس ذوق واحتياجات عملائنا
								الكرام. تتمثل رؤيتنا في تحقيق التوازن المثالي بين الوظيفية
								والجمال، حيث نجمع بين الابتكار والأناقة لإضفاء هوية فريدة على كل
								مشروع.
							</p>
							<div className="about__section-item d-flex align-items-center">
								<p className="section__description d-flex align-items-center gap-2">
									<i className="ri-checkbox-circle-line"></i>أبواب فاخرة مصممة
									خصيصاً
								</p>

								<p className="section__description d-flex align-items-center gap-2">
									<i className="ri-checkbox-circle-line"></i>تقنيات دهانات فنية
								</p>
							</div>
							<div className="about__section-item d-flex align-items-center">
								<p className="section__description d-flex align-items-center gap-2">
									<i className="ri-checkbox-circle-line"></i>تركيب السيراميك
									والبورسلين
								</p>

								<p className="section__description d-flex align-items-center gap-2">
									<i className="ri-checkbox-circle-line"></i>تركيب وتشطيب
									الأرضيات والحوائط
								</p>
							</div>

							<div className="about__section-item d-flex align-items-center">
								<p className="section__description d-flex align-items-center gap-2">
									<i className="ri-checkbox-circle-line"></i>
									تصاميم أسقف بأفكار إبداعية
								</p>

								<p className="section__description d-flex align-items-center gap-2">
									<i className="ri-checkbox-circle-line"></i>تركيب فوم بديل
									الرخام
								</p>
							</div>
						</div>
					</Col>

					<Col lg="6" md="12">
						<div className="about__img w-100 rounded-3">
							<LazyLoadImage
								src={aboutImg}
								alt="نفتخر بتقديم خدمات التشطيبات عالية الجودة"
								className="w-100 rounded-3"
								effect="blur"
							/>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default AboutSection;
