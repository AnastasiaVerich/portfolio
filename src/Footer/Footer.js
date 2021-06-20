import React from 'react'
import style from './Footer.module.scss';
import commonStyle from "../Common/Styles/container.module.css";

function Footer() {
    return (
        <div className={style.block}>
            <div className={style.container}>
                <div>Верич Анастасия</div>
                <div className={style.socialIcon}>
                    <div className={style.item}></div>
                    <div className={style.item}></div>
                    <div className={style.item}></div>
                    <div className={style.item}></div>
                </div>
                <div>2021 Все права защищены</div>
            </div>

        </div>
    );
}

export default Footer;
