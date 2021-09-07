import React from 'react'
import style from './Contacts.module.scss';
import Title from "../Common/component/Title";
import Fade from 'react-reveal/Zoom';
import axios from "axios";

let emailForm;
let messagesForm;
let nameForm;
 const send= async (event)=>{
     event.preventDefault()
     try{
         let res = await  axios.post("https://gmail-node2.herokuapp.com/sendMessages", {
             name: nameForm,
             contacts: emailForm,
             message: messagesForm
         })
         alert(res)
     }
     catch (err){
         alert(err)
     }


}
const handleEmailChange=(e) =>{
     emailForm = e.target.value;
}
const handleNameChange=(e) =>{
    nameForm = e.target.value;
}
const handleMessagesChange=(e) =>{
    messagesForm = e.target.value;

}

function Contacts() {
    return (
        <div id={"contacts"} className={style.block}>
            <Fade bottom>
            <div className={style.container}>
                <Title title={"Contact"}/>
                <form className={style.form} onSubmit={send} name={"form"} id="formElem">
                        <input placeholder={"Name"} type="text"  onChange={handleNameChange} />
                        <input placeholder={"Email"}type="text" onChange={handleEmailChange}/>
                        <textarea placeholder={"Your messages"} onChange={handleMessagesChange}/>
                    <button type="submit" className={style.formButton} >SEND MESSAGE</button>
                </form>
            </div>
        </Fade>
        </div>
    );
}

export default Contacts;
