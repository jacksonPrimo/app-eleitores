import React from 'react'
import styled from 'styled-components'
import BtnMenu from '../botao_menu'
import NavBar from '../navbar'
import Footer from '../footer'
import Logo from '../logo'
import './style.css'

const Main = styled.section`
    padding-left: 5%; 
    padding-right: 5%; 
    paddig-top: 60px;
    grid-area: main;
    @media(max-width:700px){
        padding-left: 0px;
        padding-right: 0px;
        padding-top: 0px;
    }
`

export default class PageDefault extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            ativado: false,
            position: '0px'
        }
    }
    actionClick=(e)=>{
        this.setState({
            ativado: !this.state.ativado
        })
        if(this.state.ativado === true){
            this.setState({position: '0px'})
        }else{
            this.setState({position: 'calc(0px - 40%)'})
        }
    }
    render(){
        return(
            <div className="pageDefault">
                <BtnMenu func={this.actionClick}/>
                <Logo/>
                <NavBar position={this.state.position}/>
                <Main>
                    {this.props.children}
                </Main>
                <Footer/>
            </div>
        )
    }
}