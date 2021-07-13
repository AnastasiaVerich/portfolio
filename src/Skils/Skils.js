import React from "react";
import style from "./Skils.module.scss"
import One_skil from "./One_skil/One_skil";
import Title from "../Common/component/Title";
import Fade from 'react-reveal/Zoom';



function Skils() {
    return (
        <div id={"skils"} className={style.block}>
            <Fade bottom>
            <div className={style.container}>
                <Title title={"Скилы"}/>
                <div className={style.skilsContainer}>
                    <One_skil/>
                    <One_skil/>
                    <One_skil/>
                    <One_skil/>
                    <One_skil/>
                </div>
            </div>
            </Fade>
        </div>
    )
}
export default Skils