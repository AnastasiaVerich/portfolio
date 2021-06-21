import React from "react";
import style from "./One_skil.module.scss"

function One_skil() {
    return (

            <div className={style.oneSkilsContainer}>
                <div className={style.icon}>
                </div>
                <div className={style.info}>
                    <h3 className={style.h3}>название</h3>
                    <span className={style.description}>
                    Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua Ut enim...
                </span>
                </div>
            </div>
    )
}

export default One_skil