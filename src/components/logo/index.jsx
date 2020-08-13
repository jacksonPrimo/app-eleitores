import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
const Section = styled.section`
    background-color: var(--bg-dark);
    grid-area: logo
` 
export default function Logo(){
    return(
        <Section>
            <Link to='/' style={{
                textDecoration:'none',
                color: 'black'
            }}>
                <h1>Logo</h1>
            </Link>
        </Section>
    )
}