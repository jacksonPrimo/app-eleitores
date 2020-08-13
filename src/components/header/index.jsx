import React from 'react'
import styled from 'styled-components'
const Section = styled.section`
    background-color: var(--bg-dark);
    grid-area: header
` 
export default function Header(){
    return(
        <Section>
            <h1>Aplicação para registro de eleitores e seções</h1>
        </Section>
    )
}