import React from "react";
import "../../styles/mini-social-links.css";

const MiniSocialLinks = ({ socialLinks }) => {
	return (
		<div className=" d-flex align-items-center justify-content-center gap-4">
			{socialLinks.map((item, index) => (
				<a
					href={item.url}
					key={index}
					className="social-link-icon"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className={item.icon}></i>
				</a>
			))}
		</div>
	);
};

export default MiniSocialLinks;
