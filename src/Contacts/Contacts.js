import React, {useState} from 'react'
import style from './Contacts.module.scss';
import Title from "../Common/component/Title";
import Fade from 'react-reveal/Zoom';
import axios from "axios";



function Contacts() {
    const[loading, setLoading]=useState(false)

    let emailForm;
    let messagesForm;
    let nameForm;


    const send= async (event)=>{
        event.preventDefault()
        try{ setLoading(true)
            let res = await  axios.post("https://gmail-node2.herokuapp.com/sendMessages", {
                name: nameForm,
                contacts: emailForm,
                message: messagesForm
            })
            if(res.request.status===200){
                alert("messages send")
                setLoading(false)
            }
            else {
                alert("error, try again")
                setLoading(false)
            }
        }
        catch (err){
            alert(err)
            setLoading(false)
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

    return (
        <div id={"contacts"} className={style.block}>
            <Fade bottom>
            <div className={style.container}>
                <Title title={"Contact"}/>
                <form className={style.form} onSubmit={send} name={"form"} id="formElem">
                        <input placeholder={"Name"} type="text"  onChange={handleNameChange} />
                        <input placeholder={"Email"}type="text" onChange={handleEmailChange}/>
                        <textarea placeholder={"Your messages"} onChange={handleMessagesChange}/>
                    <button type="submit" className={style.formButton} disabled={loading} >SEND MESSAGE</button>
                </form>
            </div>
        </Fade>
        </div>
    );
}

export default Contacts;
