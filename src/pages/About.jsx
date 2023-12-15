import React, { useEffect } from "react";
import "../styles/about.css";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../assets/all-images/fancy designs/631f1ef11f992f5ad82e9637bce3e25b.jpg";
import MiniSocialLinks from "../components/UI/MiniSocialLinks";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const About = ({ socialLinks }) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<Helmet title="عن الشركة">
			<CommonSection title="عن الشركة" />
			<AboutSection aboutClass="aboutPage" />

			<section className="about__page-section mt-2">
				<Container>
					<Row>
						<Col lg="6" md="12" sm="12">
							<div className="about__page-img">
								<LazyLoadImage
									src={aboutImg}
									alt="تصميم داخلي لمنزل سعودي"
									className="w-100 rounded-3"
									effect="blur"
								/>
							</div>
						</Col>
						<Col lg="6" md="12" sm="12">
							<div className="about__page-content ">
								<h2 className="section__title mb-3">
									في عالم التشطيب الداخلي والديكور، نقدم خدمات متكاملة لتحسين
									وتجميل المساحات. سواء كانت شقق، فلل، مكاتب عمل، مطاعم، أو
									كافيهات، نحن هنا لتلبية احتياجاتكم. نجمع بين الإبداع
									والاحترافية في تقديم خدمات التشطيب والإشراف المعماري، لضمان
									تحقيق أعلى مستويات الجودة والراحة في تصميم الفضاءات.
								</h2>

								<p className="section__description">
									نحن في خدمتكم لتحويل المساحات إلى أماكن فريدة وجميلة من خلال
									مجموعة شاملة من الخدمات. نقدم خدمات دهانات متخصصة تضفي لمسة
									فنية وجوهرية على الجدران، مع توفير تشكيلة واسعة من الألوان
									والتأثيرات. أبوابنا ونوافذنا الخشبية تعكس تفرد التصميم والجودة
									في التصنيع، مما يضيف لمسة فاخرة إلى أي فضاء. نحن ملتزمون
									بتوفير أسلوب ووظائف تلبي توقعاتكم. تقديم أسقف معلقة تعزز من
									طابع الفضاء وتخلق أجواء دافئة وحديثة. نستخدم مواد عالية الجودة
									لضمان المتانة والجمال في التصميم. تشطيب الواجهات هو جزء لا
									يتجزأ من خدماتنا، حيث نضمن تحقيق توازن فريد بين الأناقة
									والوظيفة. نهتم بكل التفاصيل لتقديم واجهات تتناغم مع الهوية
									الفريدة لكل مشروع. بفضل فريقنا المحترف وخبرتنا المتنوعة، نقدم
									خدمات متكاملة تجمع بين الإبداع والجودة لتحقيق رؤيتكم للمساحات
									المثالية.
								</p>

								<p className="section__description">
									تفتح أمامكم أبواب التواصل معنا عبر مواقع التواصل الاجتماعي
									لتجربة تفاعلية. نحن متواجدون على منصات مثل فيسبوك، إنستغرام،
									سناب شات، جاهزون لاستقبال استفساراتكم. وإذا كنتم في حاجة إلى
									استشارة مجانية، فنحن هنا للمساعدة. لا تترددوا في الاتصال بنا،
									حيث يسرنا تقديم خدمة استشارية فورية لتلبية احتياجاتكم وتحقيق
									رؤيتكم في تصميم الفضاءات.
								</p>

								<div className="contact-us d-flex align-items-center justify-content-center gap-3 mt-4 mb-1 text-center">
									<div>
										<h6 className="section__subtitle">تحتاج لاستشارة ؟</h6>
										<div className="phone details">
											<i className="ri-phone-line"></i>
											<div className="text number">
												<a href="tel:+966562084497">+966 56 208 4497</a>
											</div>
											<div className="text number">
												<a href="tel:+966533509594">+966 53 350 9594</a>
											</div>
										</div>
									</div>
								</div>
								<MiniSocialLinks socialLinks={socialLinks} />
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</Helmet>
	);
};

export default About;
