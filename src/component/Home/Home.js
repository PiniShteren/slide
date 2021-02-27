import React, { useState, useEffect } from 'react';
import "./home.css";
import { useHistory } from 'react-router-dom';
import data from "../data/doors.json";

export default function Home(props) {
    const [flag, setFlag] = useState(true)
    const history = useHistory();
    const dataArr = data.catalog;
    const openProductView = (i) => {
        let scroll = Math.floor(window.scrollY);
        window.scroll(0, 0);
        props.openProduct(i);
        props.sendScroll(scroll, true);
        history.push("/productView");
    }
    useEffect(() => {

        window.scroll(0, props.scroll)

    })
    return (
        <div className="home">
            <div className="home-body">
                {dataArr.map((e, i) => {
                    let img = require(`../images/rav-barich/${e.IMAGE}.png`).default;
                    return <div key={i} className="product" onClick={(key) => {
                        openProductView(i)
                    }}>
                        <h3>{e.NAME}</h3>
                        <div id="product-img" style={{ backgroundImage: `url(${img})` }} />
                    </div>
                })}
            </div >
        </div>
    )
}
