import React from 'react'
import styled from 'styled-components'
import Header from '../header'
import NavBar from '../navbar'
import Footer from '../footer'
import Logo from '../logo'
import BtnMenu from '../botao_menu'
import './style.css'

const Main = styled.section`
    flex: 1;
    padding-top: 50px; 
    padding-left: 5%; 
    padding-right: 5%; 
    grid-area: main;
    @media(max-width:860px){
        padding-left: 0px;
        padding-right: 0px;
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
                <Logo/>
                <Header/>
                <NavBar position={this.state.position}/>
                <Main>
                    <button className="btn_menu" onClick={this.actionClick}>
                        <i className="fas fa-bars"></i>
                    </button>
                    {this.props.children}
                </Main>
                <Footer/>
            </div>
        )
    }
}