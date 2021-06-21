import React from "react";
import style from "./Skils.module.scss"
import One_skil from "./One_skil/One_skil";
import Title from "../Common/component/Title";


function Skils() {
    return (
        <div className={style.block}>
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
        </div>
    )
}
export default Skils