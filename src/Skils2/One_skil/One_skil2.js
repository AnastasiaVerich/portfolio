import React from "react";
import style from "./One_skil2.module.scss"
import styled from "styled-components";


function One_skil2(props) {
const skils=
    props.skils.map((x)=>
        <div className={style.one_skil}>
        <props.name className={style.icon}/>
        <div className={style.skil}>{x}</div>
    </div>
    )



    return (

        <div className={style.oneSkilsContainer}>
            <div className={style.title}>{props.title}</div>
            <div className={style.items}>
                {skils}

            </div>

        </div>
    )
}

export default One_skil2