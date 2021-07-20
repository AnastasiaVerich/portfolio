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
                  duration={500}>Home</Link>
            <Link activeClass={style.linkA}
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>About</Link>
            <Link activeClass={style.linkA}
                  to="skils"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>Skills</Link>
            <Link activeClass={style.linkA}
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>Projects</Link>
            <Link activeClass={style.linkA}
                  to="contacts"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>Contact</Link>

        </div>
    );
}

export default Nav;
