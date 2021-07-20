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
                    <div className={style.item}>Facebook</div>
                    <div className={style.item}>Linkedin</div>
                    <div className={style.item}>GitHub</div>
                    <div className={style.item}>WhatsUp</div>

                </div>
                <div className={style.finishDesc}>© 2021 Anastasia Verich , Are Right All Resereved.</div>
            </div>

        </div>
    );
}

export default Footer;
