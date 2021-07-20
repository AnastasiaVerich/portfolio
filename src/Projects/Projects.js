import React from 'react'
import style from './Projects.module.scss';
import One_project from "./One_project/One_project";
import icon1 from ".././assets/img/1.jpg"
import icon2 from ".././assets/img/2.jpg"
import Title from "../Common/component/Title";
import Fade from 'react-reveal/Zoom';

function Projects() {
    const img1={
        backgroundImage: `url(${icon1})`,
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
                    <One_project style={img1} title={"TodoList"}/>
                    <One_project style={img2} title={"Social Network"}/>
                    <One_project style={img2} title={"other"}/>
                </div>
            </div>
            </Fade>
        </div>
    );
}
export default Projects;
