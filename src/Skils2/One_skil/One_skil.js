import React from "react";
import style from "./One_skil.module.scss"
import styled from "styled-components";


function One_skil(props) {
const skils=
    props.skils.map((x)=>
        <div className={style.one_skil}>
            {/*<x.icon className={style.icon}/>*/}
            <div className={style.img} style={x.style}/>
            <div className={style.skil}>{x.title}</div>
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

export default One_skil