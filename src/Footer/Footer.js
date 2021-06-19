import React from 'react'
import style from './Footer.module.css';
import commonStyle from "../Common/Styles/container.module.css";

function Footer() {
    return (
        <div className={style.block}>
            <div className={`${commonStyle.container} ${style.container}`}>
                <div>Верич Анастасия</div>
                <div className={style.abcd}>
                    <div className={style.item}>
                    </div>
                    <div className={style.item}>
                    </div>
                    <div className={style.item}>
                    </div><div className={style.item}>
                    </div>
                </div>
                <div>@Все права защищены</div>
            </div>

        </div>
    );
}

export default Footer;
