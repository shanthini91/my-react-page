import React from "react";
import "./footer.css"
import { FaSquareFacebook } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { SiYoutubemusic } from "react-icons/si";
import { Zoom } from "react-awesome-reveal";

const Footer = () => {
    return (
        <div className="container-fluid footer-section">
            <div className="container">
                <Zoom duration={3000}>
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 mt-3 mb-3">
                        <h6 className="text-warning fw-bold">About</h6>
                        <p>This ReactJS online course offers a structured and organized roadmap
                            to learn and master ReactJS from basic to advanced level.
                        </p>
                        <span className="social-icon">
                        <FaSquareFacebook size={20} color="orange" className="me-2"/>
                        <AiFillTwitterCircle size={20} color="orange" className="me-2"/>
                        <SiYoutubemusic size={20} color="orange" className="me-2"/>
                        <RiInstagramFill size={20} color="orange"/>
                        </span>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 mt-3 mb-3">
                    <h6 className="text-warning fw-bold">Services</h6>
                        <div className="footer-items">
                           <li><a href="#web">Web Developing Course</a></li>
                            <li><a href="mobile">Mobile App Developing Course</a></li>
                            <li><a href="#uiux">UI/UX Design Course</a></li>
                            <li><a href="#fullstack">Full Stack Developing Course</a></li>
                            <li><a href="#webservice">Web Developing Service</a></li>
                            <li><a href="#mobileservice">Mobile App Developing Service</a></li>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 mt-3 mb-3">
                    <h6 className="text-warning fw-bold">Customer Care</h6>
                        <div className="footer-items">
                            <li><a href="#login">Login</a></li>
                            <li><a href="#account">My Account</a></li>
                            <li><a href="#enquire">Enquiries</a></li>
                            <li><a href="#faq">FAQ</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                        </div>
                    </div>
                </div>
                </Zoom>
            </div>
        </div>
    )
}
export default Footer;