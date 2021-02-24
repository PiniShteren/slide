import React, { useState, useEffect } from 'react';
import Door1 from "./images/door3.png";
import Door2 from "./images/door4.png";
const images = [Door1, Door2];

export default function Carousel() {
    const [i, setI] = useState(0);
    const animation = () => {
        var div = document.getElementById('img');
        div.classList.remove('show');
        div.classList.add('hide');
        setTimeout(() => {
            if (i === 1) {
                setI(0);
            } else {
                setI(1)
            }

        }, 500)
        setTimeout(
            () => {
                div.classList.remove('hide');
                div.classList.add('show')
            }, 1000
        )
    }
    useEffect(
        () => {
            const interval = setInterval(() => { animation() }, 5000)
            return () => clearInterval(interval)
        }
    )
    return (
        <div className="img-container" style={{
            margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center'
        }}>
            <div id="img" style={{
                backgroundImage: `url(${images[i]})`, width: "50%", height: "50vh", backgroundSize: 'cover', backgroundRepeat: "no-repeat", backgroundPosition: 'center'
            }} />
        </div >
    )
}
