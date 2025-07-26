import React, { useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import "./career.css";

const DataInfo = ({ title, body }) => {

    const [show, setShow] = useState(false)

    return (
        <div className={show ? "post-card-open" : "post-card"} onClick={() => setShow(!show)}>
            <div className="collapse-option d-flex justify-content-between ps-2 mb-3">
                <h6>{title}</h6>
                <p>
                    {show ? <MdExpandLess size={20} /> : <MdExpandMore size={20} />}
                </p>
            </div>
            {show ? <p className="ps-2">{body}</p> : null}
        </div>
    )
}
export default DataInfo;