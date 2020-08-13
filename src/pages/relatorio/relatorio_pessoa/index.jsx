import React from 'react'
import './style.css'
import PageDefault from '../../../components/pageDefault/index'
import Body from './components/body_table'
import TabelaExp from './components/tabela_expandida'
import EditTabela from './components/editar_tabela'
export default class Table extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            conteudo: 'tabela'
        }
    }
    expandirTabela=(e)=>{
        const id = e.target.getAttribute("id_button")
        this.setState({
            conteudo: 'tabela-expandida',
            id_pessoa: id
        })
    }
    atrofiarTabela=(e)=>{
        this.setState({conteudo: 'tabela'})
    }
    editarTabela=e=>{
        this.setState({conteudo: 'editor'})
    }

    render(){
        if(this.state.conteudo === 'tabela'){
            return(
                <PageDefault>
                    <div className="div_table">
                        <table className="tabela_pessoa">
                            <thead>
                                <tr>
                                    <th>Cidade</th>
                                    <th>Nome</th>
                                    <th>Seção</th>
                                    <th>Situação</th>
                                    <th>ID</th>
                                    <th>opções</th>
                                </tr>
                            </thead>
                            <tbody>
                                <Body func={this.expandirTabela}/>
                            </tbody>
                        </table>
                    </div>
                </PageDefault>
            )
        }
        if(this.state.conteudo === 'tabela-expandida'){
            return(
                <PageDefault>
                    <button class="btn_voltar" onClick={this.atrofiarTabela}>voltar</button>
                    <div className="div_table">
                        <table className="tabela_pessoa">
                            <TabelaExp id_pessoa={this.state.id_pessoa}/>
                        </table>
                    </div>
                </PageDefault>
            )
        }
        else{
            return(
                <EditTabela/>
            )
        }
    }
}