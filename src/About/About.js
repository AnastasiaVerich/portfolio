import React from "react";
import style from "./About.module.scss"
import Title from "../Common/component/Title";
import Fade from 'react-reveal/Zoom';



function About() {

    return (
        <div id={"skils"} className={style.block}>
            <Fade bottom>
            <div className={style.container}>
                <Title title={"About me"}/>

            </div>
            </Fade>
        </div>
    )
}
export default About