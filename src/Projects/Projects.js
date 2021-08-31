import React from 'react'
import style from './Projects.module.scss';
import One_project from "./One_project/One_project";
import socSet from ".././assets/img/socSet.png"
import icon2 from ".././assets/img/2.jpg"
import Title from "../Common/component/Title";
import Fade from 'react-reveal/Zoom';

function Projects() {
    const socSetImg={
        backgroundImage: `url(${socSet})`
    };
    const img2={
        backgroundImage: `url(${icon2})`,
    };
    return (
        <div id={"projects"} className={style.block}>
            <Fade bottom>
            <div className={style.container}>
                <Title title={"My Projects"}/>
                <div className={style.projectsContainer}>
                    <One_project style={img2} title={"TodoList"} link={""}/>
                    <One_project style={socSetImg} title={"Social Network"} link={"https://anastasiaverich.github.io/SocSet/"}/>
                    <One_project style={img2} title={"other"} link={""}/>
                </div>
            </div>
            </Fade>
        </div>
    );
}
export default Projects;
