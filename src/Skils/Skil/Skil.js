import React from "react";
import style from "./Skil.module.css"

function Skil() {
    return (
        <div className={style.skilsContauner}>
            <div className={style.icon}>
            </div>
            <h3>название</h3>
            <span className={style.description}>
             много много слов много много слов много
            </span>
        </div>
    )
}

export default Skil