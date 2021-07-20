import React from "react";
import style from "./One_project.module.scss"
import Button from "../../Common/component/Button";
import buttonStyle from "../../Common/component/Button.module.scss"

function One_project(props) {
    return (
        <div className={style.oneProjectsContainer}>
            <div className={style.img} style={props.style}>

                <button className={`${buttonStyle.formButton} ${style.button}`}>See more</button>
            </div>
            <div className={style.info}>
                <h3 className={style.h3}>{props.title}</h3>
                {/*<span className={style.description}>
             Краткое описание Краткое описание Краткое описание Краткое описание
            </span>*/}
            </div>
        </div>
    )
}

export default One_project