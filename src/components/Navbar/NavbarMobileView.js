import React, { useState } from "react";
import "./navbarmobileview.css";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../../images/react-logo.png";
import { Link } from 'react-scroll';


const NavbarMobileView = () => {

    const [open,setOpen] = useState(false);

    const handleNavbarOpen = ()=>{
        setOpen(!open)
    }

    return (
        <div className="responsive-navbar fixed-top">

            <div className="container-fluid mobile-view-header">
                <p className="d-flex justify-content-between p-2">
                    <img className="img-style" src={logo} height="30px" width="50px" alt="logo-img"></img>
                    <RxHamburgerMenu size={30} color="yellow" onClick={handleNavbarOpen}/>
                </p>
            </div>
            {open? (
                 <div className="mobile-nav">
                 <ul>
                     <Link activeClass="active" to="home" spy={true} smooth={true} offset={-260} duration={100}>
                         <li className="nav-item">Home</li>
                     </Link>
 
                     <Link to="about" spy={true} smooth={true} offset={-300} duration={100}>
                         <li className="nav-item">About</li>
                     </Link>
 
                     <Link to="services" spy={true} smooth={true} offset={-340} duration={100}>
                         <li className="nav-item">Services</li>
                     </Link>
 
                     <Link to="career" spy={true} smooth={true} offset={-340} duration={100}>
                         <li className="nav-item">Career</li>
                     </Link >
 
                     <Link to="video" spy={true} smooth={true} offset={-340} duration={100}>
                         <li className="nav-item">Video</li>
                     </Link >
 
                     <Link to="team" spy={true} smooth={true} offset={-340} duration={100}>
                         <li className="nav-item">Team</li>
                     </Link >
 
                     <Link to="testimonial" spy={true} smooth={true} offset={-340} duration={100}>
                         <li className="nav-item">Testimonial</li>
                     </Link >
 
                     <Link to="feedback" spy={true} smooth={true} offset={-340} duration={100}>
                         <li className="nav-item">Feedback</li>
                     </Link >
 
                     <Link to="contact" spy={true} smooth={true} offset={-340} duration={100}>
                         <li className="nav-item">Contact</li>
                     </Link >
 
                     <Link to="subscribe" spy={true} smooth={true} offset={-390} duration={100}>
                         <li className="nav-item">Subscriptions</li>
                     </Link >
                 </ul >
             </div>
            ):null}
           
        </div>
    )
}
export default NavbarMobileView;
