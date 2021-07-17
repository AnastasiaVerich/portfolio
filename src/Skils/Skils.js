import React from "react";
import style from "./Skils.module.scss"
import One_skil from "./One_skil/One_skil";
import Title from "../Common/component/Title";
import Fade from 'react-reveal/Zoom';
import styled from "styled-components";



function Skils() {

    const REACT = styled.div`
       ::before {
         content: "⚛";
       }`;
    const Redux = styled.div`
      ::before {
        content: "❆";
      }`;
    const JS_TS = styled.div`
      ::before {
        content: "☺";
      }`;
    const HTML_CSS = styled.div`
      ::before {
        content: "⁂";
      }`;
    const GIT = styled.div`
      ::before {
        content: "⚜";
      }`;
    return (
        <div id={"skils"} className={style.block}>
            <Fade bottom>
            <div className={style.container}>
                <Title title={"Скилы"}/>
                <div className={style.skilsContainer}>
                    <One_skil name={REACT} title={"React"}/>
                    <One_skil name={Redux} title={"Redux"}/>
                    <One_skil name={JS_TS} title={"JS/TS"}/>
                    <One_skil name={HTML_CSS} title={"HTML/CSS"}/>
                    <One_skil name={GIT} title={"GIT"}/>

                </div>
            </div>
            </Fade>
        </div>
    )
}
export default Skils