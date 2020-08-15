import React from 'react'
import './style.css'
export default function BtnMenu(props){
    return(
        <button className="btn_menu" onClick={e=>props.actionClick}>
            <i className="fas fa-bars"></i>
        </button>
    )
}