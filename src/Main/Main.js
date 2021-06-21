import React from 'react'
import style from './Main.module.scss';

function Main() {
    return (
        <div className={style.block}>
            <div className={style.container}>
                <div className={style.textContainer}>
                    <span>Привет здесь</span>
                    <h1>Я Анастасия Верич</h1>
                    <p>Я front-end разработчик</p>
                </div>
                <div className={style.omg}>
                    <div className={style.photo}></div>
                    <span className={style.photoSpan}></span>
                </div>
            </div>
        </div>
    );
}
export default Main;
