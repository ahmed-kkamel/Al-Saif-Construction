import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";
const quickLinks = [
	{
		path: "/home",
		display: "الرئيسيه",
	},
	{
		path: "/about",
		display: "عن الشركة",
	},
	{
		path: "/contact",
		display: "تواصل معنا",
	},
	{
		path: "/blogs",
		display: "الخدمات",
	},
	{
		path: "/work",
		display: "أعمالنا",
	},
];

const Footer = ({ socialLinks }) => {
	const date = new Date();
	const year = date.getFullYear();
	return (
		<footer className="footer">
			<Container>
				<Row>
					<Col lg="4" md="6" sm="12 text-center">
						<div className="logo footer__logo ">
							<h1>
								<Link
									to="/"
									className=" d-flex align-items-center justify-content-center gap-2"
								>
									<span className="text-center">السيف للمعمار</span>
								</Link>
							</h1>
						</div>
						<p className="footer__logo-content">
							تتميز شركة السيف للمعمار بتقديم خدمات تشطيبات فاخرة للمنازل،
							المكاتب، والمطاعم. تشمل خدماتها الرائعة الدهانات الفنية، التصميمات
							الخشبية الفريدة، وتركيب الأسقف المعلقة بأناقة. تتسم الشركة
							بالالتزام بتقديم مشاريع ذات جودة عالية وفي الوقت المحدد، مع
							التركيز الكامل على إرضاء العملاء.
						</p>
					</Col>

					<Col lg="1" md="6 d-flex justify-content-center" sm="6">
						<div className="mb-3">
							<h5 className="footer__link-title mb-1">صفحات</h5>
							<ListGroup>
								{quickLinks.map((item, index) => (
									<ListGroupItem key={index} className="p-0 mt-3 quick__link">
										<Link to={item.path}>{item.display}</Link>
									</ListGroupItem>
								))}
							</ListGroup>
						</div>
					</Col>

					<Col lg="3" md="6" sm="12 d-flex justify-content-center">
						<div className="mb-2">
							<h5 className="footer__link-title text-center mb-3">أهدافنا</h5>
							<p className="office__info">
								1. إرضاء الطرف المالك بتسليم المشروع بالوقت المحدد.
							</p>
							<p className="office__info">
								2. تحقيق أعلى مستويات الاحترافية عمليات التشطيب.
							</p>
							<p className="office__info">
								3. تقديم تصاميم مبتكرة تعكس احتياجات كل مشروع.
							</p>
							<p className="office__info">
								4. تعزيز الشفافية والتواصل الفعّال مع العملاء.
							</p>
						</div>
					</Col>
					<Col lg="4" md="6 text-center" sm="6 text-center">
						<div className="mb-3">
							<h5 className="footer__link-title mb-3">التفاصيل</h5>
							<p className="office__info">
								<i className="ri-map-pin-line"></i> حفر الباطن العزيزيه اشارة
								الحويلا خلف فندق بنان وبجانب شعبيات اليمن
							</p>
							<div className="phone details">
								<i className="ri-phone-line"></i>
								<div className="text number">
									<a href="tel:+966562084497">+966 56 208 4497</a>
								</div>
								<div className="text number">
									<a href="tel:+966533509594">+966 53 350 9594</a>
								</div>
							</div>
							<div className=" d-flex align-items-center justify-content-center gap-4">
								{socialLinks.map((item, index) => (
									<a
										href={item.url}
										key={index}
										className="social__link-icon"
										target="_blank"
										rel="noopener noreferrer"
									>
										<i className={item.icon}></i>
									</a>
								))}
							</div>
						</div>
					</Col>

					<Col lg="12 text-center">
						<div className="footer__bottom">
							<p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
								<i className="ri-copyright-line"></i>جميع الحقوق محفوظه - شركة
								السيف للمعمار - Copyright {year}.
							</p>
						</div>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
