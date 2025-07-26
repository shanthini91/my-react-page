import React from "react";
import "./feedback.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { JackInTheBox } from "react-awesome-reveal";


const Feedback = () => {

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
    ];

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        adaptiveHeight: true,
        initialSlide: 0,
        autoPlay: true,
        rows: 1,
        slidesPerRow: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    //slidesToScroll: 3,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    //slidesToScroll: 2,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    //slidesToScroll: 1
                }
            }
        ]
        //slidesToScroll: 1
    };

    return (
        <section className="feedback-section container-fluid">
                    <div className="container feedback-slider mt-5" id="feedback">
            <h2 className="text-center text-danger fw-bold">Feedback</h2>
            <div className="feedback-slide mt-4">
                <Slider {...settings}>
                    {data.map((item, index) => (
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mt-4 mb-3" key={index}>
                            <JackInTheBox duration={3000} triggerOnce={false}>
                            <div className="card content-slider m-2">
                                <img src={item.img} alt="slide-img" />
                                <p>{item.content}</p>
                                <h4>{item.name}</h4>
                                <p>{item.position}</p>
                            </div>
                            </JackInTheBox>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
        </section>
    )
}
export default Feedback;