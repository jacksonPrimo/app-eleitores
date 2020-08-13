import React from 'react'
import styled from 'styled-components'
const Section = styled.section`
    grid-area: footer;
    background-color: black;
    color: white;
` 
export default function Footer(){
    return(
        <Section>
            <p>CopyRight</p>
        </Section>
    )
}