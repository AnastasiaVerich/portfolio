import React from "react";
import style from "./Skils.module.css"
import commonStyle from '../Common/Styles/container.module.css'
import Skil from "./Skil/Skil";


function Skils() {
    return (
        <div className={style.block}>
            <div className={`${commonStyle.container} ${style.container}`}>
                <h2 className={style.title}>skils</h2>
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