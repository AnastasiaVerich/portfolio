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
                        <div className={style.direction}><span className={style.firstWord}>klklklm</span>gcsdgcjsgfjhcgsdgfshdgshdgf
                            hjsdhj sfs df dsf sd fsd sdf sd fs df sd
                            fs dfd sf s
                            fsd fdsfsdf
                        </div>
                        <div className={style.aboutOtherContainer}>
                            <div className={style.column}>
                                <div className={style.item}><b>dcscsdc:</b> csdcdscds</div>
                                <div className={style.item}><b>dcscsdc:</b> csdcdscds</div>
                                <div className={style.item}><b>dcscsdc:</b> csdcdscds</div>
                            </div>
                            <div className={style.column}>
                                <div className={style.item}><b>dcscsdc:</b> csdcdscds</div>
                                <div className={style.item}><b>dcscsdc:</b> csdcdscds</div>
                                <div className={style.item}><b>dcscsdc:</b> csdcdscds</div>
                            </div>
                        </div>

                    </div>

                </div>
            </Fade>
        </div>
    )
}

export default About