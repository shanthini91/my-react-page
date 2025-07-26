import React, { useState } from "react";
import "./testimonial.css";
import { Roll } from "react-awesome-reveal";


const Testimonial = () => {

    const data = [
        {
            "img": "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
            "content": "A passionate and trustworthy developer and trainer.",
            "name": "Carley Mane",
            "position": "Web Developer"
        },
        {
            "img": "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
            "content": "A passionate and trustworthy developer and trainer.",
            "name": "Jane Mathew",
            "position": "Full Stack Developer"
        },
        {
            "img": "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600",
            "content": "A passionate and trustworthy developer and trainer.",
            "name": "Henry fawn",
            "position": "Mobile App Developer"
        },
        {
            "img": "https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=600",
            "content": "A passionate and trustworthy developer and trainer.",
            "name": "Mark Johnnes",
            "position": "Senior Android Developer"
        },
        {
            "img": "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=600",
            "content": "A passionate and trustworthy developer and trainer.",
            "name": "Veronica Sebastine",
            "position": "Full Stack Developer"
        },
        {
            "img": "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=600",
            "content": "A passionate and trustworthy developer and trainer.",
            "name": "Jack Wishley",
            "position": "UI/UX Designer"
        },
        {
            "img": "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600",
            "content": "A passionate and trustworthy developer and trainer.",
            "name": "Carl Shinny",
            "position": "Senior Web Developer"
        },
        {
            "img": "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=600",
            "content": "A passionate and trustworthy developer and trainer.",
            "name": "Shane Patty",
            "position": "UI/UX Designer"
        },
        {
            "img": "https://images.pexels.com/photos/1090387/pexels-photo-1090387.jpeg?auto=compress&cs=tinysrgb&w=600",
            "content": "A passionate and trustworthy developer and trainer.",
            "name": "Andreson Verghee",
            "position": "Web Developer"
        },
        {
            "img": "https://images.pexels.com/photos/709188/pexels-photo-709188.jpeg?auto=compress&cs=tinysrgb&w=600",
            "content": "A passionate and trustworthy developer and trainer.",
            "name": "Fernandes",
            "position": "Andriod Developer"
        },
        {
            "img": "https://images.pexels.com/photos/769746/pexels-photo-769746.jpeg?auto=compress&cs=tinysrgb&w=600",
            "content": "A passionate and trustworthy developer and trainer.",
            "name": "Joe Franklin",
            "position": "Mobile App Developer"
        },
        {
            "img": "https://images.pexels.com/photos/29822694/pexels-photo-29822694/free-photo-of-stylish-man-posing-outdoors-in-kaduna.jpeg?auto=compress&cs=tinysrgb&w=600",
            "content": "A passionate and trustworthy developer and trainer.",
            "name": "Vurzie Kim",
            "position": "Web Developer"
        },
        {
            "img": "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
            "content": "A passionate and trustworthy developer and trainer.",
            "name": "Carley Mane",
            "position": "Web Developer"
        },
        {
            "img": "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
            "content": "A passionate and trustworthy developer and trainer.",
            "name": "Jane Mathew",
            "position": "Full Stack Developer"
        },
        {
            "img": "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600",
            "content": "A passionate and trustworthy developer and trainer.",
            "name": "Henry fawn",
            "position": "Mobile App Developer"
        },
        {
            "img": "https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=600",
            "content": "A passionate and trustworthy developer and trainer.",
            "name": "Mark Johnnes",
            "position": "Senior Android Developer"
        },
        {
            "img": "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=600",
            "content": "A passionate and trustworthy developer and trainer.",
            "name": "Veronica Sebastine",
            "position": "Full Stack Developer"
        },
        {
            "img": "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=600",
            "content": "A passionate and trustworthy developer and trainer.",
            "name": "Jack Wishley",
            "position": "UI/UX Designer"
        },
        {
            "img": "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600",
            "content": "A passionate and trustworthy developer and trainer.",
            "name": "Carl Shinny",
            "position": "Senior Web Developer"
        },
        {
            "img": "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=600",
            "content": "A passionate and trustworthy developer and trainer.",
            "name": "Shane Patty",
            "position": "UI/UX Designer"
        },
        {
            "img": "https://images.pexels.com/photos/1090387/pexels-photo-1090387.jpeg?auto=compress&cs=tinysrgb&w=600",
            "content": "A passionate and trustworthy developer and trainer.",
            "name": "Andreson Verghee",
            "position": "Web Developer"
        },
        {
            "img": "https://images.pexels.com/photos/709188/pexels-photo-709188.jpeg?auto=compress&cs=tinysrgb&w=600",
            "content": "A passionate and trustworthy developer and trainer.",
            "name": "Fernandes",
            "position": "Andriod Developer"
        },
        {
            "img": "https://images.pexels.com/photos/769746/pexels-photo-769746.jpeg?auto=compress&cs=tinysrgb&w=600",
            "content": "A passionate and trustworthy developer and trainer.",
            "name": "Joe Franklin",
            "position": "Mobile App Developer"
        },
        {
            "img": "https://images.pexels.com/photos/29822694/pexels-photo-29822694/free-photo-of-stylish-man-posing-outdoors-in-kaduna.jpeg?auto=compress&cs=tinysrgb&w=600",
            "content": "A passionate and trustworthy developer and trainer.",
            "name": "Vurzie Kim",
            "position": "Web Developer"
        },
    ];

    const [showMorePost, setShowMorePost] = useState(9);

    const loadMore = () => {
        setShowMorePost((prev) => prev + 3);
    };

    return (
        <div className="container testimonial-section" id="testimonial">
            <div className="section-title">
                <h2 className="text-center text-danger fw-bold">Testimonial</h2>
            </div>
            <div className="row mb-5">
                {data.slice(0, showMorePost).map((Item, index) => (
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={index}>
                        <Roll duration={2000} triggerOnce={false}>
                            <div className={index === 0 ? "marked-content-card" : "content-card"}>
                                <img src={Item.img} alt="img" />
                                <p>{Item.content}</p>
                                <span className="name-style fw-bold">{Item.name}</span>
                                <p className="mt-2">{Item.position}</p>
                            </div>
                        </Roll>
                    </div>
                ))}

                {showMorePost >= data.length ? null : (
                    <div className="d-flex justify-content-center">
                        <div className="btn btn-danger btn-md mt-3 btn-style" onClick={loadMore}>Load More</div>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Testimonial;