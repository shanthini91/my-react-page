import React from "react";
import "./home.css";
import Typewriter from 'typewriter-effect';
import { Slide } from "react-awesome-reveal";
import { LuMoonStar,LuSun  } from "react-icons/lu";


const Home = ({theme,handleChangeTheme})=>{
    return(
        <div className="container-fluid home" id="home">
            <div className="row home-content">
            <div className="theme-change" onClick={()=>handleChangeTheme()}>
                {
                    theme === "light" ?(
                        <p>
                            <LuMoonStar size={25}/>
                        </p>
                    ):(
                        <p className="theme-icon">
                            <LuSun size={25}/>
                        </p>
                    )
                }
            </div>
            <Slide direction="left" cascade triggerOnce={false} duration={3000}>
                <div className="col-xl-12 col-md-12 col-sm-12">
                    <h1><span className="heading-style">React Course</span>
                <Typewriter
                options={{
                    strings: [
                        'Web Development',
                        'Mobile App Development',
                        'UI/UX Design',
                        'Full Stack Development'],
                    autoStart: true,
                    loop: true,
                     }}
                />
                </h1>
                <p className="p-style">Transform into a job-ready ReactJS developer with our complete ReactJS course. 
                Whether you are a beginner who wants to learn ReactJS from scratch or an experienced developer 
                who wants to advance your ReactJS skills, this ReactJS online course offers a structured 
                and organized roadmap to learn and master ReactJS from basic to advanced level.
                </p>
                <span className="view-details-home-button">View Details</span>
                    </div>
                    </Slide>

                </div>
        </div>
    );
};
export default Home;