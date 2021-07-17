import React from "react";
import style from "./One_skil.module.scss"
import styled from "styled-components";


function One_skil(props) {


    return (

            <div className={style.oneSkilsContainer}>
             <props.name className={style.icon}>
              </props.name>
                <div className={style.info}>
                    <h3 className={style.h3}>{props.title}</h3>
                </div>
            </div>
    )
}

export default One_skil