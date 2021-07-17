import React from "react";
import style from "./Skils2.module.scss"
import One_skil2 from "./One_skil/One_skil2";
import Title from "../Common/component/Title";
import Fade from 'react-reveal/Zoom';
import styled from "styled-components";



function Skils2() {

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
                    <One_skil2 name={REACT} title={"HTML"} skils={["HTML5","JSX"]}/>
                    <One_skil2 name={Redux} title={"CSS"} skils={["CSS3","SASS","Bootstrap"]}/>
                    <One_skil2 name={JS_TS} title={"Javascript/Typescript"} skils={["React","Javascript", "TypeScript","Node" ]}/>
                    <One_skil2 name={HTML_CSS} title={"Build Tools"} skils={["Webpack"]}/>
                    <One_skil2 name={GIT} title={"Other"} skils={["Github","Photoshop"]}/>

                </div>
            </div>
            </Fade>
        </div>
    )
}
export default Skils2