import React from "react";
import "./subscription.css";
import { Slide } from "react-awesome-reveal";


const Subscription = () => {
    return (
        <div className="container-fluid subscription-container" id="subscribe">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mt-3 mb-5">
                        <Slide direction="left" duration={3000}>
                            <h4 className="text-white text-outline-success text-center fw-bold mt-4">Subscribe For Your Course</h4>
                        </Slide>
                        <Slide direction="right" duration={3000}>
                            <div className="subscription-form mt-4">
                                <input type="email" className="form-control input-sm" id="floatingInput" placeholder="Enter your mail id" required />
                                <button className="form-control input-sm mt-4">Subscribe</button>
                            </div>
                        </Slide>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Subscription;