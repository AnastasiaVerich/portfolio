import React from "react";
import style from "./Skils.module.scss"
import One_skil from "./One_skil/One_skil";
import Title from "../Common/component/Title";
import Fade from 'react-reveal/Zoom';
import styled from "styled-components";



function Skils() {
    const HTML5 = styled.div`
       ::before {
         content: "⚛";
       }`;
    const JSX = styled.div`
      ::before {
        content: "❆";
      }`;
    const CSS3 = styled.div`
      ::before {
        content: "☺";
      }`;
    const SASS = styled.div`
      ::before {
        content: "⁂";
      }`;
    const Bootstrap = styled.div`
      ::before {
        content: "♥";
      }`;
    const Javascript = styled.div`
      ::before {
        content: "⚜";
      }`;
    const React = styled.div`
      ::before {
        content: "♣";
      }`;
    const TypeScript = styled.div`
      ::before {
        content: "♠";
      }`;
    const Node = styled.div`
      ::before {
        content: "•";
      }`;
    const Webpack = styled.div`
      ::before {
        content: "◘";
      }`;
    const Github = styled.div`
      ::before {
        content: "☻";
      }`;
    const Photoshop = styled.div`
      ::before {
        content: "♀";
      }`;
    const forReact=[{title: "HTML5", icon: HTML5},{title: "JSX", icon: JSX}]
    const forRedux=[{title: "CSS3", icon: CSS3},{title: "SASS", icon: SASS},{title: "Bootstrap", icon: Bootstrap}]
    const forJS_TS=[{title: "React", icon: React},{title: "Javascript", icon: Javascript},{title: "TypeScript", icon: TypeScript},{title: "Node", icon: Node}]
    const forHTML_CSS=[{title: "Webpack", icon: Webpack}]
    const forGIT=[{title: "Github", icon: Github},{title: "Photoshop", icon: Photoshop}]

    return (
        <div id={"skils"} className={style.block}>
            <Fade bottom>
            <div className={style.container}>
                <Title title={"My Skills"}/>
                <div className={style.skilsContainer}>
                    <One_skil title={"HTML"} skils={forReact}/>
                    <One_skil title={"CSS"} skils={forRedux}/>
                    <One_skil title={"Javascript/Typescript"} skils={forJS_TS}/>
                    <One_skil title={"Build Tools"} skils={forHTML_CSS}/>
                    <One_skil title={"Other"} skils={forGIT}/>

                </div>
            </div>
            </Fade>
        </div>
    )
}
export default Skils