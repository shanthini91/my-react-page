import React from "react";
import "./services.css";
import web from "../../images/service-web.jpg";
import mobile from "../../images/service-mobile.jpg";
import uiux from "../../images/service-uiux.jfif";
import fullstack from "../../images/service-fullstack.jpg";
import { JackInTheBox } from "react-awesome-reveal";


const Services = () => {
    return (
        <div className="container service-section mt-5 mb-5" id="services">
            <div className="service-title mt-5">
                <h2 className="text-center text-danger fw-bold">Services</h2>
            </div>
            <JackInTheBox triggerOnce={false}>
                <div className="row people d-flex justify-content-center">
                    <div className="col-xl-3 col-md-6 col-lg-3 col-sm-12 item">
                        <div className="box" style={{
                            backgroundImage: "url(" + web + ")"
                        }}>
                            <div className="cover">
                                <h3 className="name">Web Development</h3>
                                <p className="title">We build websites that convert, connect, and cultivate lasting customer relationships.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-lg-3 col-sm-12 item">
                        <div className="box" style={{
                            backgroundImage: "url(" + mobile + ")"
                        }}>
                            <div className="cover">
                                <h3 className="name">Mobile App Development</h3>
                                <p className="title">We are a global leader in the mobile app development landscape with clientele spanning across multiple industries as well as countries.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-lg-3 col-sm-12 item">
                        <div className="box" style={{
                            backgroundImage: "url(" + uiux + ")"
                        }}>
                            <div className="cover">
                                <h3 className="name">UI/UX Design</h3>
                                <p className="title">We provide top-notch UI and UX design services to bring peace to your application.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-lg-3 col-sm-12 item">
                        <div className="box" style={{
                            backgroundImage: "url(" + fullstack + ")"
                        }}>
                            <div className="cover">
                                <h3 className="name">Full Stack Development</h3>
                                <p className="title">With an extensive understanding and experience, we serve custom Full Stack development services and solutions with the latest technologies.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </JackInTheBox>
        </div>

    );
}
export default Services;