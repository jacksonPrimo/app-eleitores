import React from 'react'
import LinkNav from './components/LinkNav'
import ItemList from './components/ItemList'
import './style.css'

export default function NavBar(props){
    return(
        <section className="navbar" style={{left: props.position}}>
            <ul className="menu_lateral">
                <ItemList fig="fas fa-plus-circle" txtSpan="cadastrar">
                    <ul className="sub_menu">
                        <LinkNav fig="fas fa-user-plus" txtSpan="Pessoa" url="/cadastrar/pessoa"/>
                        <LinkNav fig="fas fa-layer-plus" txtSpan="seção" url="/cadastrar/secao"/>
                    </ul>
                </ItemList>
                <ItemList fig="fas fa-table" txtSpan="Relatorio">
                    <ul className="sub_menu">
                        <LinkNav fig="fas fa-id-card" txtSpan="Pessoas" url="/relatorio/pessoa"/>
                        <LinkNav fig="fas fa-building" txtSpan="Seções" url="/relatorio/secao"/>
                    </ul>
                </ItemList>
                <ItemList fig="fas fa-search" txtSpan="Pesquisar">
                    <ul className="sub_menu">
                        <LinkNav fig="fas fa-id-card" txtSpan="Pessoa" url="/pesquisar/pessoa"/>
                        <LinkNav fig="fas fa-building" txtSpan="Seção" url="/pesquisar/secao"/>
                    </ul>
                </ItemList>
            </ul>
        </section>
    )
}