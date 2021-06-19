import React from 'react'
import style from './Contacts.module.css';
import commonStyle from '../Common/Styles/container.module.css'

function Contacts() {
    return (
        <div className={style.block}>
            <div className={`${commonStyle.container} ${style.container}`}>
                <h2 className={style.title}>Контакты</h2>
                <form className={style.form}>
                        <input/>
                        <input/>
                        <textarea/>
                    <button>отправить</button>
                </form>
            </div>
        </div>
    );
}

export default Contacts;
