import React from 'react'
import style from './Projects.module.scss';
import One_project from "./One_project/One_project";
import socSet from ".././assets/img/socSet.png"
import todolist from ".././assets/img/todolist.png"
import Title from "../Common/component/Title";
import Fade from 'react-reveal/Zoom';

function Projects() {
    const socSetImg={
        backgroundImage: `url(${socSet})`
    };
    const todolistimg={
        backgroundImage: `url(${todolist})`,
    };
    return (
        <div id={"projects"} className={style.block}>
            <Fade bottom>
            <div className={style.container}>
                <Title title={"My Projects"}/>
                <div className={style.projectsContainer}>
                    <One_project style={todolistimg} title={"TodoList"} link={"https://anastasiaverich.github.io/TodoList_1/"}/>
                    <One_project style={socSetImg} title={"Social Network"} link={"https://anastasiaverich.github.io/SocSet/"}/>
                </div>
            </div>
            </Fade>
        </div>
    );
}
export default Projects;
