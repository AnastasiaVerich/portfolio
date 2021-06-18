import React from "react";
import style from "./One_project.module.css"

function One_project() {
    return (
        <div className={style.skil}>
            <div className={style.icon}>
            </div>
            <h3 className={style.h3}>Название проекта</h3>
            <span className={style.description}>
             Краткое описаниеКраткое описаниеКраткое описаниеКраткое описание
            </span>
        </div>
    )
}

export default One_project