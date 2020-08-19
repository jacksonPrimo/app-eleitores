import React from 'react'
import './style.css'
export default function BtnMenu(props){
    return(
        <section className="btn_menu">
            <button onClick={e=>props.func(e)}>
                <i className="fas fa-bars"></i>
            </button>
        </section>
    )
}