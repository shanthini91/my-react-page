import React from "react";
import "./team.css";
import { FaSquareFacebook } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { Slide } from "react-awesome-reveal";


const Team = () => {

    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600",
            content: "A passionate and trustworthy developer and trainer.",
            name: "Carl Shinny"
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=600",
            content: "A passionate and trustworthy developer and trainer.",
            name: "Shane Patty"
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/1090387/pexels-photo-1090387.jpeg?auto=compress&cs=tinysrgb&w=600",
            content: "A passionate and trustworthy developer and trainer.",
            name: "Andreson Verghee"
        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/709188/pexels-photo-709188.jpeg?auto=compress&cs=tinysrgb&w=600",
            content: "A passionate and trustworthy developer and trainer.",
            name: "Fernandes"
        },
        {
            id: 5,
            img: "https://images.pexels.com/photos/769746/pexels-photo-769746.jpeg?auto=compress&cs=tinysrgb&w=600",
            content: "A passionate and trustworthy developer and trainer.",
            name: "Joe Franklin"
        },
        {
            id: 6,
            img: "https://images.pexels.com/photos/29822694/pexels-photo-29822694/free-photo-of-stylish-man-posing-outdoors-in-kaduna.jpeg?auto=compress&cs=tinysrgb&w=600",
            content: "A passionate and trustworthy developer and trainer.",
            name: "Vurzie Kim"
        },
    ]

    return (
        <div className="container team-section" id="team">
            <h2 className="text-center text-danger fw-bold">Team Members</h2>
            <div className="row">
                {data.map((item, index) => (
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mt-4 team-card" key={index}>
                        <Slide duration={1000} direction="up">
                        <div className="card team-items">
                            <img src={item.img} alt="team-img" />
                            <div className="team-info mx-2">
                                <h6 className="mt-2 text-danger">{item.name}</h6>
                                <p>{item.content}</p>
                            </div>
                            <span className="team-line"></span>
                            <div className="social-icon d-flex justify-content-center">
                                <FaSquareFacebook size={30} className="m-3 fb" />
                                <AiFillTwitterCircle size={30} className="m-3 twtr" />
                                <RiInstagramFill size={30} className="m-3 inst" />
                            </div>
                        </div>
                        </Slide>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Team;