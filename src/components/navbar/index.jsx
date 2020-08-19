import React from 'react'
import LinkNav from './components/LinkNav'
import ItemList from './components/ItemList'
import './style.css'
import BarraDeBusca from './components/barraDeBusca'

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
                        <LinkNav fig="fas fa-hashtag" txtSpan="Apelido" url="/relatorio/busca/apelido"/>
                        <LinkNav fig="fas fa-building" txtSpan="Seção" url="/relatorio/busca/seção"/>
                        <LinkNav fig="fas fa-map-marker-alt" txtSpan="Referência" url="/relatorio/busca/ref"/>
                    </ul>
                </ItemList>
                <ItemList fig="fas fa-chart-line" txtSpan="Situação">
                    <ul className="sub_menu">
                        <LinkNav fig="fas fa-user-chart" txtSpan="Eleitores" url="/"/>
                        <LinkNav fig="fas fa-user-chart" txtSpan="Não Eleitores" url="/"/>
                    </ul>
                </ItemList>
            </ul>
        </section>
    )
}