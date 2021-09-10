import React from 'react'
import style from './Footer.module.scss';

function Footer() {
    return (
        <div className={style.block}>
            <div className={style.container}>
{/*
                <div className={style.name}>Anastasia Verich</div>
*/}
                <div className={style.socialIcon}>
                    <div className={style.item} onClick={()=>{return window.open("https://www.facebook.com/profile.php?id=100004185551501")}}>Facebook</div>
                    <div className={style.item}onClick={()=>{return window.open("https://www.linkedin.com/in/anastasia-verich-106a67216/")}}>Linkedin</div>
                    <div className={style.item}  onClick={()=>{return window.open("https://github.com/AnastasiaVerich")}}>GitHub</div>
                    <div className={style.item}onClick={()=>{return window.open("https://t.me/anastasia_verich")}}>Telegram</div>

                </div>
                <div className={style.finishDesc}>© 2021 Anastasia Verich , Are Right All Resereved.</div>
            </div>

        </div>
    );
}

export default Footer;
