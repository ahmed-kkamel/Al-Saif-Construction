import React from "react";
import Slider from "react-slick";
import "../../styles/testimonial.css";

import ava01 from "../../assets/all-images/client-1.jpeg";
import ava02 from "../../assets/all-images/client-2.jpeg";
import ava03 from "../../assets/all-images/client-3.jpeg";
import ava04 from "../../assets/all-images/client-4.jpeg";
import ava05 from "../../assets/all-images/client-5.jpeg";
import ava06 from "../../assets/all-images/client-6.jpeg";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Testimonial = () => {
	const settings = {
		dots: true,
		infinite: true,
		autoplay: true,
		speed: 1000,
		swipeToSlide: true,
		autoplaySpeed: 2000,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<Slider {...settings}>
			<div className="testimonial py-4 px-3">
				<p className="section__description">
					تجربتي مع شركة السيف للمعمار كانت رائعة بكل المقاييس. الفريق عندهم
					مهنية عالية في تصاميم الجبسوم بورد وركن الأبواب الخشبية، ساهموا في
					إعطاء المنزل طابع فريد. كانوا دايماً على استعداد لاستماع احتياجاتي
					وتحويلها لواقع رائع. اختيارهم الذكي لبدائل الرخام أظهر اهتمامًا
					بالتفاصيل واقتصادية بدون فقدان للجودة. أنا مرتاح جدًا للنتيجة وبشدة
					أنصح بالتعامل معهم.
				</p>

				<div className="mt-3 d-flex align-items-center gap-4">
					<LazyLoadImage
						src={ava01}
						alt="عبدالله شملان السهلي"
						className="w-25 h-25 rounded-2"
						effect="blur"
					/>

					<div>
						<h6 className="mb-0 mt-3">عبدالله شملان السهلي</h6>
						<p className="section__description">عميل</p>
					</div>
				</div>
			</div>

			<div className="testimonial py-4 px-3">
				<p className="section__description">
					شعرت بالاحترافية والاهتمام الكبير بتفاصيل مشروعي. كان فريق العمل
					ودودًا ومتفانيًا في تلبية احتياجاتي وفهم رؤيتي للمنزل. أعجبني كثيرًا
					ترتيبهم لجميع مراحل العمل، بدءًا من التخطيط وصولاً إلى التنفيذ. تمكنوا
					من تحويل فكرتي إلى واقع ملموس بأسلوب رائع ودقة في التنفيذ. أنصح بشدة
					بشركة السيف للمعمار لأي شخص يبحث عن تجربة بناء وتشطيب مميزة في
					المملكة.
				</p>

				<div className="mt-3 d-flex align-items-center gap-4">
					<LazyLoadImage
						src={ava02}
						alt="عبدالرحمن العنزي"
						className="w-25 h-25 rounded-2"
						effect="blur"
					/>

					<div>
						<h6 className="mb-0 mt-3">عبدالرحمن العنزيي</h6>
						<p className="section__description">عميل</p>
					</div>
				</div>
			</div>

			<div className="testimonial py-4 px-3">
				<p className="section__description">
					قامت السيف للمعمار بتشطيب الفيلا بإتقان واهتمام، حيث أبدعوا في تحسين
					واجهة المنزل بشكل لافت واستخدموا أفضل الخامات في تصميم الأسقف. كما لفت
					انتباهي اهتمامهم الفريد بتفاصيل الأعمال الخشبية، مما أضفى للمكان
					طابعاً ريفياً جميلاً. أنصح بشدة بالتعامل مع هذه الشركة المحترفة والتي
					أظهرت مهارة استثنائية في مجال التشطيبات بلغة العمارة بأسلوبٍ سعودي
					أصيل.
				</p>

				<div className="mt-3 d-flex align-items-center gap-4">
					<LazyLoadImage
						src={ava03}
						alt="ابو خالد المطيري"
						className="w-25 h-25 rounded-2"
						effect="blur"
					/>

					<div>
						<h6 className="mb-0 mt-3">ابو خالد المطيري</h6>
						<p className="section__description">عميل</p>
					</div>
				</div>
			</div>

			<div className="testimonial py-4 px-3">
				<p className="section__description">
					تعاونت مع شركة السيف للمعمار في تجديد مطعمي "ماء الكادي" و"فونتاين".
					كانت الاهتمامات بواجهة المطعم ملحوظة، حيث تم تصميمها بلمسات رائعة تعكس
					الهوية السعودية بأناقة. كما لفت انتباهي التنظيم الداخلي الذكي الذي
					أضفى على المطعمين جوًا مريحًا. كما أسندت اليهم أيضا مهمة تشطيب منزلي
					فهم مبدعون وأنصح بالتعامل معاهم.
				</p>

				<div className="mt-3 d-flex align-items-center gap-4">
					<LazyLoadImage
						src={ava04}
						alt="البرنس منصور العجل"
						className="w-25 h-25 rounded-2"
						effect="blur"
					/>

					<div>
						<h6 className="mb-0 mt-3">البرنس منصور العجل</h6>
						<p className="section__description">عميل</p>
					</div>
				</div>
			</div>

			<div className="testimonial py-4 px-3">
				<p className="section__description">
					قامت السيف للمعمار بتشطيب بيتي بأتقان ومهنية عالية. كانت تجربة رائعة
					مع فريق عمل محترف وملتزم. تألقوا في تحويل أفكاري إلى واقع جميل،
					وتميزوا في الإنجاز بروح الفريق. أشكر السيف للمعمار على الخدمة
					الممتازة. والتزامهم بالجدول الزمني المحدد. وأنا ممتن لتفهمهم العميق
					لتطلعات العملاء وتحقيقهم لرضاهم.
				</p>

				<div className="mt-3 d-flex align-items-center gap-4">
					<LazyLoadImage
						src={ava05}
						alt="أبو سيف الظفيري"
						className="w-25 h-25 rounded-2"
						effect="blur"
					/>

					<div>
						<h6 className="mb-0 mt-3">أبو سيف الظفيري</h6>
						<p className="section__description">عميل</p>
					</div>
				</div>
			</div>

			<div className="testimonial py-4 px-3">
				<p className="section__description">
					قامت السيف للمعمار بتشطيب فيلتي بشكل رائع. لاحظت الاهتمام الكبير الذي
					وضعوه في تصميم واجهة المنزل، مما أضفى على المكان طابعًا خاصًا. كما
					أبهروني بجودة أعمالهم الداخلية، خاصةً في استخدام السيراميك وأسقف الجبس
					بورد. لا شك أن الشركة تفهم تمامًا ذوق العميل وتقديره للتفاصيل الدقيقة.
					كما كان تقديم الخدمة في الوقت المحدد أمرًا إيجابيًا.
				</p>

				<div className="mt-3 d-flex align-items-center gap-4">
					<LazyLoadImage
						src={ava06}
						alt="الشيخ بدر سلطان الملحم"
						className="w-25 h-25 rounded-2"
						effect="blur"
					/>

					<div>
						<h6 className="mb-0 mt-3">الشيخ بدر سلطان الملحم</h6>
						<p className="section__description">عميل</p>
					</div>
				</div>
			</div>
		</Slider>
	);
};

export default Testimonial;
