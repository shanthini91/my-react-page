import React, { useState, useEffect } from "react";
import "./career.css";
import DataInfo from "./DataInfo";
import Pagination from "../Pagination/Pagination";
import { Slide } from "react-awesome-reveal";


const Career = () => {

    const url = "https://jsonplaceholder.typicode.com/posts";

    const [data, setData] = useState([]);

    //for pagination

    const PER_Page = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const handlePageClick = ({ selected: selectedPage }) => {
        setCurrentPage(selectedPage)
    }

    const offset = currentPage * PER_Page;
    const currentPageData = data.slice(offset, offset + PER_Page);

    const pageCount = Math.ceil(data.length / PER_Page);


    const loadPostData = () => {
        fetch(url, {
            method: "GET"
        }).then(res => res.json())
            .then((result) => {
                if (result) {
                    setData(result);
                }
            }).catch((err) => {
                console.log(err);
            })
    };
    useEffect(() => {
        loadPostData();
    }, []);

    return (
        <div className="container career-section mt-5" id="career">
            <h2 className="text-center text-danger fw-bold">Career</h2>
            <div className="row mt-4">
                {data && currentPageData.map((item, index) => (
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12" key={index}>
                        <Slide duration={3000} triggerOnce={false}>
                            <DataInfo {...item} />
                        </Slide>
                        { }
                    </div>
                ))}
            </div>
            <div className="pagination-details">
                <Slide duration={3000}>
                    <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
                </Slide>
            </div>
        </div>
    )
}
export default Career;