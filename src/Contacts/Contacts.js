import React from 'react'
import style from './Contacts.module.scss';
import commonStyle from '../Common/Styles/container.module.css'

function Contacts() {
    return (
        <div className={style.block}>
            <div className={style.container}>
                <h2 className={style.title}>Контакты</h2>
                <form className={style.form}>
                        <input type="text"/>
                        <input type="text"/>
                        <textarea/>
                    <button type="submit" className={style.formButton}>Отправить</button>
                </form>
            </div>
        </div>
    );
}

export default Contacts;
