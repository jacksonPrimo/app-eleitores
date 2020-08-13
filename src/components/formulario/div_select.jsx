import React from 'react'
export default function Div_Select(props){
    return(
        <div className="entrada">
            <select required className={props.name} name={props.name} id={props.name}>
                {props.children}
            </select>
        </div>
    )
}