import React from "react";
import "./about.css";
import about from "../../images/about.jpg"
import web from "../../images/web-developer.png"
import mobile from "../../images/Mobile-app.png"
import uiux from "../../images/ui-ux.png"
import fullstack from "../../images/full-stack.png"
import { Slide } from "react-awesome-reveal";


const About = () => {
    return (
        <div className="container about-section" id="about">
            <div className="row mb-5">
                <div className="col-xl-6 col-md-12 col-sm-12">
                    <Slide direction="left" duration={3000} triggerOnce={false}>
                    <div className="about-image mt-5">
                        <img src={about} height="400px" width="400px" alt="about-alt" />
                    </div>
                    </Slide>
                </div>
                <div className="col-xl-6 col-md-12 col-sm-12">
                    <Slide direction="right" duration={3000} triggerOnce={false} cascade damping={0.5}>
                    <div className="about-details mt-5">
                        <div className="about-title">
                            <h3 className="text-center text-danger fw-bold">
                                About Our Course
                            </h3>
                            <p>
                                This ReactJS online course offers a structured and organized roadmap
                                to learn and master ReactJS from basic to advanced level.
                            </p>
                            <div className="card mt-2 card-style">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-2">
                                            <img src={web} height="60px" width="60px" alt="web-alt" />
                                        </div>
                                        <div className="col-10">
                                            <p>Create user-friendly, beautiful, light and fast websites using React JS.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card mt-4 card-style">
                                <div className="card-body">
                                    <div className="row">
                                    <div className="col-2">
                                        <img src={mobile} height="60px" width="60px" alt="mobile-alt" />
                                    </div>
                                    <div className="col-10">
                                        <p>Create user-friendly, beautiful, light and fast Mobile App using React JS.</p>
                                    </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="card mt-4 card-style">
                            <div className="card-body">
                                <div className="row">
                                <div className="col-2">
                                    <img src={uiux} height="60px" width="60px" alt="uiux-alt" />
                                </div>
                                <div className="col-10">
                                        <p>Build UI/UX projects in React JS from Scratch to get perfection in CSS.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mt-4 card-style">
                            <div className="card-body">
                                <div className="row">
                                <div className="col-2">
                                    <img src={fullstack} height="60px" width="60px" alt="fullstack-alt" />
                                </div>
                                <div className="col-10">
                                        <p>Learn full stack web development with react js, nodejs</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Slide>
                </div>
            </div>
        </div>

    );
};
export default About;