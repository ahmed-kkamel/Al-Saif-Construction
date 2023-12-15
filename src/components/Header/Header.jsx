import React, { useRef } from "react";
import { Container } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import "../../styles/header.css";
import logoImage from "../../assets/all-images/Al-saif logo.jpeg";
const navLinks = [
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

const Header = () => {
	const menuRef = useRef(null);
	const toggleMenu = () => menuRef.current.classList.toggle("menu__active");
	return (
		<header className="header">
			<div className="main__navbar">
				<Container>
					<div className="header_logo">
						<Link to="/home">
							<img src={logoImage} alt="header logo" />
						</Link>
					</div>
					<div className="header_contact">
						<a
							href="https://wa.me/+966562084497"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="ri-whatsapp-line"></i>
						</a>
					</div>
					<div className="navigation__wrapper d-flex align-items-center justify-content-between">
						<span className="mobile__menu">
							<i className="ri-menu-line" onClick={toggleMenu}></i>
						</span>
						<div className="navigation" ref={menuRef} onClick={toggleMenu}>
							<div className="menu">
								{navLinks.map((item, index) => (
									<NavLink
										to={item.path}
										className={(navClass) =>
											navClass.isActive ? "nav__active nav__item" : "nav__item"
										}
										key={index}
									>
										{item.display}
									</NavLink>
								))}
							</div>
						</div>
					</div>
				</Container>
			</div>
		</header>
	);
};

export default Header;
