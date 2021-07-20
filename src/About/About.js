import React from "react";
import style from "./About.module.scss"
import Title from "../Common/component/Title";
import Fade from 'react-reveal/Zoom';


function About() {

    return (
        <div id={"about"} className={style.block}>
            <Fade bottom>
                <div className={style.container}>
                    <Title title={"About me"}/>
                    <div className={style.aboutContainer}>
                        <div className={style.direction}><span className={style.firstWord}> I am </span>
                             Anastasia Verich, a front-end developer.
                            I live and work in Minsk, Belarus.
                            I create sites both from scratch and based on CMS (Wordpress, etc.).
                            I like to look for interesting solutions, create the impossible with css and implement ideas in the form of sites.).
                            I read the documentation in English.
                            I work in a team with pleasure.
                        </div>
                        <div className={style.aboutOtherContainer}>
                            <div className={style.column}>
                                <div className={style.item}><b>Name:</b> Anastasia Verich</div>
                                <div className={style.item}><b>Age:</b> 22</div>
                                <div className={style.item}><b>From:</b> Belarus</div>

                            </div>
                            <div className={style.column}>
                                <div className={style.item}><b>Email:</b> a.verich.m@gmail.com</div>
                                <div className={style.item}><b>Phone:</b> +375 29 727 69 70</div>
                                <div className={style.item}><b>Freelancer:</b> Available</div>
                            </div>
                        </div>

                    </div>

                </div>
            </Fade>
        </div>
    )
}

export default About