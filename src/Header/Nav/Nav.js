import React from 'react'
import style from './Nav.module.scss';
import {Link, animateScroll as scroll} from "react-scroll";

function Nav() {
    return (
        <div className={style.nav}>
            {/*   <a href={""}>Главная</a>
            <a href={"#skils"}>Скиллы</a>
            <a href={""}>Проекты</a>
            <a href={""}>Контакты</a>*/}
            <Link activeClass={style.linkA}
                  to="main"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>Главная</Link>
            <Link activeClass={style.linkA}
                  to="skils"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>Скиллы</Link>
            <Link activeClass={style.linkA}
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>Проекты</Link>
            <Link activeClass={style.linkA}
                  to="contacts"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>Контакты</Link>

        </div>
    );
}

export default Nav;
