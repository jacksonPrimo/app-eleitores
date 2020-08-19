import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'
export default function Logo(){
    return(
        <section className="logo">
            <Link to='/' style={{
                textDecoration:'none',
                color: 'black'
            }}>
                <img alt="logo da aplicação" src="https://fontmeme.com/permalink/200815/f074acff82796a2b3a7837fcf6357290.png"></img>
            </Link>
        </section>
    )
}