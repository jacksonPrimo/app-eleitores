import React from 'react'
import {Link} from 'react-router-dom'
export default function LinkNav(props){
    return(
        <li>
            <Link to={props.url} className="link_nav">
                <i className={props.fig}/>
                <span>{props.txtSpan}</span>
            </Link>
        </li>
    )    
}