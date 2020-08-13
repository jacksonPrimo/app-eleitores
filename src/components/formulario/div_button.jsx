import React from 'react'
export default function DivInput(props){
    return(
        <div className="entrada">
            <button type={props.type}>{props.name}</button>
        </div>
    )
}