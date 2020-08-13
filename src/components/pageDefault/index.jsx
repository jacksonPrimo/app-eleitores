import React from 'react'
import styled from 'styled-components'
import Header from '../header'
import NavBar from '../navbar'
import Footer from '../footer'
import Logo from '../logo'

const Main = styled.section`
    flex: 1;
    padding-top: 50px; 
    padding-left: 5%; 
    padding-right: 5%; 
    grid-area: main
`

export default function PageDefault({ children }){
    return(
        <div className="pageDefault">
            <Logo/>
            <Header/>
            <NavBar/>
            <Main>
                {children}
            </Main>
            <Footer/>
        </div>
    )
}