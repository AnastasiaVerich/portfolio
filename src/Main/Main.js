import React from 'react'
import style from './Main.module.scss';
import Particles from "react-particles-js";
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt'



 const  particlesOpt ={
     "particles":{
         "number":{
             "value":150,
             "density": {
                 "enable": true,
                 "value_area": 800
             }
         }
     }
 }

function Main() {
    return (
        <div id={"main"} className={style.block}>
            <Particles className={style.particles} params={particlesOpt} />
            <div className={style.container}>
                <div className={style.textContainer}>
                    <span>Привет здесь</span>
                    <span>Я Анастасия <span >Верич</span></span>
                    <h1><ReactTypingEffect  text={["Я front-end разработчик"]}/></h1>
                </div>
                <div className={style.omg}>
                    <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
                        <div className="Tilt-inner">
                    <div className={style.photo}></div>
                    <span className={style.photoSpan}></span>
                        </div>
                    </Tilt>

                </div>
            </div>
        </div>
    );
}
export default Main;
