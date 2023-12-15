import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import WorkListing from "../pages/WorkListing";
import WorkDetails from "../pages/WorkDetails";

const Routers = ({ socialLinks }) => {
	return (
		<Routes>
			<Route path="/" element={<Navigate to="/home" />} />
			<Route path="/home" element={<Home />} />
			<Route path="/about" element={<About socialLinks={socialLinks} />} />
			<Route path="/work" element={<WorkListing />} />
			<Route path="/work/:slug" element={<WorkDetails />} />
			<Route path="/blogs" element={<Blog />} />
			<Route path="/blogs/:slug" element={<BlogDetails />} />
			<Route path="/contact" element={<Contact socialLinks={socialLinks} />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default Routers;
