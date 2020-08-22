import React from 'react'
export default function DivInput(props){
    return(
        <div className="entrada div_button">
            {
                props.func 
                ?<button class="button_form" onClick={props.func} type={props.type}>{props.name}</button>
                :<button class="button_form" type={props.type}>{props.name}</button>
            }
        </div>
    )
}