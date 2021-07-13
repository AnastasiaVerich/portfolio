import React from 'react'
import style from './Button.module.scss';

function Button(props) {
    return(
        <button type="submit" className={style.formButton}>{props.title}</button>

    )
}
export default Button


