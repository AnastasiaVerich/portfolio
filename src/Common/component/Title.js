import React from 'react'
import style from './Title.module.scss';

function Title(props) {
    return(
        <div className={style.titleContainer}>
            <h2 >{props.title}</h2>
        </div>
    )
}
export default Title


