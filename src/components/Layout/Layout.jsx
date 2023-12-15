import React, { Fragment } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";
const socialLinks = [
	{
		url: "https://www.facebook.com/profile.php?id=100004117292971&mibextid=ZbWKwL",
		icon: "ri-facebook-line",
	},
	{
		url: "https://www.instagram.com/slamhsyf505__0533509594?igshid=YTQwZjQ0NmI0OA%3D%3D",
		icon: "ri-instagram-line",
	},
	{
		url: "https://www.snapchat.com/add/nsrslh2023122?share_id=VVkY0ZtxD_w&locale=ar-SA",
		icon: "ri-snapchat-line",
	},
	{
		url: "https://wa.me/+966562084497",
		icon: "ri-whatsapp-line",
	},
];
const Layout = () => {
	return (
		<Fragment>
			<Header />
			<div>
				<Routers socialLinks={socialLinks} />
			</div>
			<Footer socialLinks={socialLinks} />
		</Fragment>
	);
};

export default Layout;
