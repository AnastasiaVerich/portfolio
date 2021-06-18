import React from 'react'
import style from './Main.module.css';
import commonStyle from '../Common/Styles/container.module.css'

function Main() {
    return (
        <div className={style.block}>
            <div className={`${commonStyle.container} ${style.container}`}>
                <div className={style.text}>
                    <span>Привет здесь</span>
                    <h1>Я Анастасия Верич</h1>
                    <p>Я front-end разработчик</p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    );
}

export default Main;
