import React from "react";
import "../../styles/our-members.css";
import { Col } from "reactstrap";
import ava01 from "../../assets/all-images/our-members/nasser-salah.jpg";
import ava02 from "../../assets/all-images/our-members/saif-nasser-salah.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const OUR__MEMBERS = [
	{
		name: "م/ ناصر صلاح",
		// experience: "5 years of experience",
		fbUrl:
			"https://www.facebook.com/profile.php?id=100004117292971&mibextid=ZbWKwL",
		instUrl:
			"https://www.instagram.com/slamhsyf505__0533509594?igshid=YTQwZjQ0NmI0OA%3D%3D",
		snapUrl:
			"https://www.snapchat.com/add/nsrslh2023122?share_id=VVkY0ZtxD_w&locale=ar-SA",
		whatsappUrl: "https://wa.me/+966562084497",
		imgUrl: ava01,
	},

	{
		name: "م/ سيف ناصر صلاح",
		// experience: "5 years of experience",
		fbUrl: "#",
		instUrl: "#",
		twitUrl: "#",
		linkedinUrl: "#",
		imgUrl: ava02,
	},
];

const OurMembers = () => {
	return (
		<>
			{OUR__MEMBERS.map((item, index) => (
				<Col
					lg="6"
					md="6"
					sm="4"
					xs="12"
					key={index}
					className="mb-4 d-flex justify-content-center"
				>
					<div className="single__member">
						<div className="single__member-img">
							<LazyLoadImage
								src={item.imgUrl}
								alt={item.name}
								className="w-100"
								effect="blur"
							/>

							<div className="single__member-social">
								<a href={item.fbUrl}>
									<i className="ri-facebook-line"></i>
								</a>
								<a href={item.snapUrl}>
									<i className="ri-snapchat-line"></i>
								</a>

								<a href={item.whatsappUrl}>
									<i className="ri-whatsapp-line"></i>
								</a>

								<a href={item.instUrl}>
									<i className="ri-instagram-line"></i>
								</a>
							</div>
						</div>

						<h6 className="text-center mb-0 mt-3">{item.name}</h6>
						<p className="section__description text-center">
							{item.experience}
						</p>
					</div>
				</Col>
			))}
		</>
	);
};

export default OurMembers;
