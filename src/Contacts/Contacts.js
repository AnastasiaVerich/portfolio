import React from 'react'
import style from './Contacts.module.scss';
import Title from "../Common/component/Title";
import Fade from 'react-reveal/Zoom';
import axios from "axios";
import {getFormValues} from "redux-form";

const send=()=>{
    debugger
    axios.post("http://localhost:3010/sendMessages",{
        name:  document.getElementById('Name'),
        contacts:"jnjj",
        message:getFormValues('sms')
    })
        .then(()=>{
            alert("send")
        })
}

function Contacts() {
    return (
        <div id={"contacts"} className={style.block}>
            <Fade bottom>
            <div className={style.container}>
                <Title title={"Contact"}/>
                <form className={style.form} onSubmit={send} name={"form"}>
                        <input placeholder={"Name"} type="text" name={"Name"} value={"ss"}/>
                        <input placeholder={"Email"}type="text" name={"Email"}/>
                        <textarea placeholder={"Your messages"} name={"sms"}/>
                    <button type="submit" className={style.formButton} >SEND MESSAGE</button>
                </form>
            </div>
        </Fade>
        </div>
    );
}

export default Contacts;
