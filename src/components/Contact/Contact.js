import React from "react";
import "./contact.css";
import { Slide } from "react-awesome-reveal";


const Contact = () => {
    return (
        <div className="container-fluid contact-section" id="contact">
            <div className="row d-flex justify-content-center">
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                    <Slide direction="right" duration={3000}>
                        <h2 className="text-danger text-outline-success text-center fw-bold mt-4">Contact Us</h2>
                    </Slide>
                    <Slide direction="left" duration={3000}>
                        <form className="form-style m-3">
                            <input type="text" className="form-control input-sm mb-2" id="name" placeholder="Enter your name" required />
                            <input type="email" className="form-control input-sm mb-2" id="email" placeholder="Enter your mail id" required />
                            <input type="number" className="form-control input-sm mb-2" id="number" placeholder="Enter your mobile number" required />
                            <select class="form-select input-sm mb-2" id="course">
                                <option selected>Choose course...</option>
                                <option value="1">Web Development</option>
                                <option value="2">Mobile App Development</option>
                                <option value="3">UI/UX Design</option>
                                <option value="3">Fullstack Development</option>
                            </select>
                            <textarea class="form-control input-sm mb-2" id="message" aria-label="With textarea" placeholder="Enter your message" required></textarea>
                            <button className="form-control input-sm mt-4">Submit</button>
                        </form>
                    </Slide>
                </div>
            </div>
        </div>
    )
}
export default Contact;