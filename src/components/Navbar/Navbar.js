import React, { useState } from "react";
import "./navbar.css";
import { Link } from 'react-scroll';
import logo from "../../images/react-logo.png";

const Navbar = () => {

    const [navScrollColor, setNavScrollColor] = useState(false);

    const onChangeNavColor = () => {
        if (window.scrollY >= 100) {
            setNavScrollColor(true);
        }
        else {
            setNavScrollColor(false);
        }
    }

    window.addEventListener("scroll", onChangeNavColor);

    return (
        <nav className={navScrollColor ? "nav-scroll-color fixed-top" : "nav-main fixed-top"}>
            <img className="img-style" src={logo} height="50px" width="80px" alt="logo-img"></img>
            <ul>
                <Link activeClass="active" to="home" spy={true} smooth={true} offset={-100} duration={100}>
                    <li className="nav-item">Home</li>
                </Link>

                <Link to="about" spy={true} smooth={true} offset={-100} duration={100}>
                    <li className="nav-item">About</li>
                </Link>

                <Link to="services" spy={true} smooth={true} offset={-100} duration={100}>
                    <li className="nav-item">Services</li>
                </Link>

                <Link to="career" spy={true} smooth={true} offset={-100} duration={100}>
                    <li className="nav-item">Career</li>
                </Link >

                <Link to="video" spy={true} smooth={true} offset={-100} duration={100}>
                    <li className="nav-item">Video</li>
                </Link >

                <Link to="team" spy={true} smooth={true} offset={-100} duration={100}>
                    <li className="nav-item">Team</li>
                </Link >

                <Link to="testimonial" spy={true} smooth={true} offset={-100} duration={100}>
                    <li className="nav-item">Testimonial</li>
                </Link >

                <Link to="feedback" spy={true} smooth={true} offset={-100} duration={100}>
                    <li className="nav-item">Feedback</li>
                </Link >

                <Link to="contact" spy={true} smooth={true} offset={-100} duration={100}>
                    <li className="nav-item">Contact</li>
                </Link >

                <Link to="subscribe" spy={true} smooth={true} offset={-100} duration={100}>
                    <li className="nav-item">Subscriptions</li>
                </Link >
            </ul >
        </nav >

    );
};
export default Navbar;