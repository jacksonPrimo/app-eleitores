import React from 'react'
export default function DivInput(props){
    return(
        <div className="entrada div_button">
            <button type={props.type}>{props.name}</button>
        </div>
    )
}