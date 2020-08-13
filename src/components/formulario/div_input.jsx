import React from 'react'
export default function DivInput(props){
    return(
        <div className={`entrada ${props.name}`}>
            <input required type={props.type} name={props.name} id={props.name} placeholder={props.placeholder}/>
        </div>
    )
}