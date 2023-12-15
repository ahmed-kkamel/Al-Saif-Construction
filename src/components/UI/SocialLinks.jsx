import "../../styles/social-links.css";
import React from "react";

const SocialLinks = () => {
	return (
		<div className="social-links">
			<a
				href="https://www.facebook.com/profile.php?id=100004117292971&mibextid=ZbWKwL"
				className="social-media-icon"
				target="_blank"
				rel="noopener noreferrer"
			>
				<i className="ri-facebook-circle-fill"></i>
			</a>
			<a
				href="https://www.instagram.com/slamhsyf505__0533509594?igshid=YTQwZjQ0NmI0OA%3D%3D"
				className="social-media-icon"
				target="_blank"
				rel="noopener noreferrer"
			>
				<i className="ri-instagram-fill"></i>
			</a>
			<a
				href="https://www.snapchat.com/add/nsrslh2023122?share_id=VVkY0ZtxD_w&locale=ar-SA"
				className="social-media-icon"
				target="_blank"
				rel="noopener noreferrer"
			>
				<i className="ri-snapchat-fill"></i>
			</a>
			<a
				href="https://wa.me/+966562084497"
				className="social-media-icon"
				target="_blank"
				rel="noopener noreferrer"
			>
				<i className="ri-whatsapp-fill"></i>
			</a>
		</div>
	);
};

export default SocialLinks;
