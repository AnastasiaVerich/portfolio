import React from 'react'
import style from './Contacts.module.scss';
import commonStyle from '../Common/Styles/container.module.css'
import Title from "../Common/component/Title";

function Contacts() {
    return (
        <div className={style.block}>
            <div className={style.container}>
                <Title title={"Контакты"}/>
                <form className={style.form}>

                        <input placeholder={"Name"} type="text"/>
                        <input placeholder={"Email"}type="text"/>
                        <textarea placeholder={"Your messages"}/>
                    <button type="submit" className={style.formButton}>Отправить</button>
                </form>
            </div>
        </div>
    );
}

export default Contacts;
