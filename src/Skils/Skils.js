import React from "react";
import style from "./Skils.module.scss"
import commonStyle from '../Common/Styles/container.module.css'
import Skil from "./Skil/Skil";
import Title from "../Common/component/Title";


function Skils() {
    return (
        <div className={style.block}>
            <div className={style.container}>
                <Title title={"Скилы"}/>
                <div className={style.skilsContainer}>
                    <Skil/>
                    <Skil/>
                    <Skil/>
                    <Skil/>
                    <Skil/>
                </div>
            </div>
        </div>
    )
}

export default Skils