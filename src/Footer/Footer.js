import React from 'react'
import style from './Footer.module.scss';

function Footer() {
    return (
        <div className={style.block}>
            <div className={style.container}>
                <div className={style.name}>Верич Анастасия</div>
                <div className={style.socialIcon}>
                    <div className={style.item}></div>
                    <div className={style.item}></div>
                    <div className={style.item}></div>
                    <div className={style.item}></div>
                </div>
                <div className={style.finishDesc}>© 2021 Все права защищенны.</div>
            </div>

        </div>
    );
}

export default Footer;
