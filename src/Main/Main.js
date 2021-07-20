import React from 'react'
import style from './Main.module.scss';
import Particles from "react-particles-js";
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt'
import icon1 from "../assets/img/3.jpg";


const particlesOpt = {
    "particles": {
        "number": {
            "value": 150,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        links: {
            color: "rgb(200,200,200)",
         /*   color: "rgba(255,182,193,0.58)",*/
        },
    }
}

function Main() {
    const img1={
        backgroundImage: `url(${icon1})`,
    };
    return (
        <div id={"main"} className={style.block}>
            <Particles className={style.particles} params={particlesOpt}/>
            <div className={style.container}>
                <div className={style.textContainer}>
                    <span className={style.spanFirst}>Hello. My name is</span>
                    <span className={style.spanSecond}>Anastasia Verich</span>
                    <h1>A <ReactTypingEffect text={["front-end developer"]}/></h1>
                </div>
                <div className={style.omg}>
                    <Tilt className="Tilt" options={{max: 25}}>
                        <div className="Tilt-inner">
                            <div className={style.photo} style={img1}></div>
                            <span className={style.photoSpan}></span>
                        </div>
                    </Tilt>

                </div>
            </div>
        </div>
    );
}

export default Main;
