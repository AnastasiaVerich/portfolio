import React from "react";
import style from "./Skils.module.scss"
import One_skil from "./One_skil/One_skil";
import Title from "../Common/component/Title";
import Fade from 'react-reveal/Zoom';
import styled from "styled-components";
import HTML5_icon from "../assets/skilsIcon/html5.png"
import react_icon from "../assets/skilsIcon/react.png"
import css3_icon from "../assets/skilsIcon/css3.png"
import bootstrap_icon from "../assets/skilsIcon/bootstrap.png"
import github_icon from "../assets/skilsIcon/github.png"
import javascript_icon from "../assets/skilsIcon/javascript.png"
import webpack_icon from "../assets/skilsIcon/webpack.png"
import nodejs_icon from "../assets/skilsIcon/nodejs.png"
import sass_icon from "../assets/skilsIcon/sass.png"
import ts_icon from "../assets/skilsIcon/typescript-1-1175078.png"
import photoshop_icon from "../assets/skilsIcon/photoshop.png"




function Skils() {
    const HTML5={
        backgroundImage: `url(${HTML5_icon})`,
    };
    const JSX={
        backgroundImage: `url(${react_icon})`,
    };
    const CSS3={
        backgroundImage: `url(${css3_icon})`,
    };
    const SASS={
        backgroundImage: `url(${sass_icon})`,
    };
    const Bootstrap={
        backgroundImage: `url(${bootstrap_icon})`,
    };
    const ReacT={
        backgroundImage: `url(${react_icon})`,
    };
    const Javascript={
        backgroundImage: `url(${javascript_icon})`,
    };
    const TypeScript={
        backgroundImage: `url(${ts_icon})`,
    };
    const Node={
        backgroundImage: `url(${nodejs_icon})`,
    };
    const Webpack={
        backgroundImage: `url(${webpack_icon})`,
    };
    const Github={
        backgroundImage: `url(${github_icon})`,
    };
    const Photoshop={
        backgroundImage: `url(${photoshop_icon})`,
    };

    //если бы меняли контент, а не бэкграунд
    // const HTML5 = styled.div`
    //    ::before {
    //      content: "⚛";
    //    }`;
    // const JSX = styled.div`
    //   ::before {
    //     content: "❆";
    //   }`;
    // const CSS3 = styled.div`
    //   ::before {
    //     content: "☺";
    //   }`;
    // const SASS = styled.div`
    //   ::before {
    //     content: "⁂";
    //   }`;
    // const Bootstrap = styled.div`
    //   ::before {
    //     content: "♥";
    //   }`;
    // const Javascript = styled.div`
    //   ::before {
    //     content: "⚜";
    //   }`;
    // const React = styled.div`
    //   ::before {
    //     content: "♣";
    //   }`;
    // const TypeScript = styled.div`
    //   ::before {
    //     content: "♠";
    //   }`;
    // const Node = styled.div`
    //   ::before {
    //     content: "•";
    //   }`;
    // const Webpack = styled.div`
    //   ::before {
    //     content: "◘";
    //   }`;
    // const Github = styled.div`
    //   ::before {
    //     content: "☻";
    //   }`;
    // const Photoshop = styled.div`
    //   ::before {
    //     content: "♀";
    //   }`;
    const forReact=[{title: "HTML5", style: HTML5},{title: "JSX", style: JSX}]
    const forRedux=[{title: "CSS3", style: CSS3},{title: "SASS", style: SASS},/*{title: "Bootstrap", style: Bootstrap}*/]
    const forJS_TS=[{title: "React", style: ReacT},{title: "JS", style: Javascript},{title: "TS", style: TypeScript},{title: "Node", style: Node}]
    const forHTML_CSS=[{title: "Webpack", style: Webpack}]
    const forGIT=[{title: "Github", style: Github}/*,{title: "Photoshop", style: Photoshop}*/]

    return (
        <div id={"skils"} className={style.block}>
            <Fade bottom>
            <div className={style.container}>
                <Title title={"My Skills"}/>
                <div className={style.skilsContainer}>
                    <One_skil title={"HTML"} skils={forReact} />
                    <One_skil title={"CSS"} skils={forRedux}/>
                    <One_skil title={"Javascript/Typescript"} skils={forJS_TS}/>
                    {/*<One_skil title={"Build Tools"} skils={forHTML_CSS}/>*/}
                    <One_skil title={"Other"} skils={forGIT}/>

                </div>
            </div>
            </Fade>
        </div>
    )
}
export default Skils