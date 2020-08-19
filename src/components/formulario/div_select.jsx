import React from 'react'
export default function Div_Select(props){
    return(
        <div className={`entrada ${props.name}`}>
            <select required name={props.name} id={props.name}>
                {props.children}
            </select>
        </div>
    )
}