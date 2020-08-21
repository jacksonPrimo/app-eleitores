import React from 'react'
export default function DivInput(props){
    return(
        <div className="entrada div_button">
            {
                props.func 
                ?<button onClick={props.func} type={props.type}>{props.name}</button>
                :<button type={props.type}>{props.name}</button>
            }
        </div>
    )
}