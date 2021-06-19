import React from 'react'
import style from './Projects.module.css';
import commonStyle from '../Common/Styles/container.module.css'
import One_project from "./One_project/One_project";

function Projects() {
    return (
        <div className={style.block}>
            <div className={`${commonStyle.container} ${style.container}`}>
                <h2 className={style.title}>Мои проекты</h2>
                <div className={style.projectsContainer}>
                    <One_project/>
                    <One_project/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
