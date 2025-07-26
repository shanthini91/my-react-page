import React from "react";
import "./video.css";
import ReactPlayer from 'react-player';
import { Zoom } from "react-awesome-reveal";


const Video = () => {

    const data = [
        {
            id: 1,
            url: "https://www.youtube.com/watch?v=MfIoAG3e7p4",
            title: "Advanced React tutorial"
        },
        {
            id: 2,
            url: "https://www.youtube.com/watch?v=RVFAyFWO4go",
            title: "Basic to Advanced React"
        },
        {
            id: 3,
            url: "https://www.youtube.com/watch?v=cd3P3yXyx30",
            title: "React Crash Course"
        },
        {
            id: 4,
            url: "https://www.youtube.com/watch?v=CMwXHvSfJxk",
            title: "Web and Mobile App Using React"
        },
        {
            id: 5,
            url: "https://www.youtube.com/watch?v=I6ypD7qv3Z8",
            title: "Fullstack Using React"
        },
        {
            id: 6,
            url: "https://www.youtube.com/watch?v=LMagNcngvcU",
            title: "UI/UX using React"
        },
    ]

    return (
        <div className="container video mb-5" id="video">
            <div className="section-title">
                <h2 className="text-center text-danger fw-bold mb-4">Find Our Tutorial Video</h2>
            </div>
            <div className="row mt-3">
                {data.map((item, index) => (
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={index}>
                        <Zoom duration={3000} triggerOnce={false}>
                            <div className="video-info mb-4">
                                <ReactPlayer url={item.url} controls width="auto" height="250px" />
                                <h5 className="p-3">{item.title}</h5>
                            </div>
                        </Zoom>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Video;