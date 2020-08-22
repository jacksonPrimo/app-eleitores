import React from 'react'
export default function DivInput(props){
    return(
        <div className={`entrada ${props.name}`}>
            {
                props.required
                ? <input required type={props.type} name={props.name} id={props.name} placeholder={props.placeholder}/>
                : <input type={props.type} name={props.name} id={props.name} placeholder={props.placeholder}/>
            }
        </div>
    )
}