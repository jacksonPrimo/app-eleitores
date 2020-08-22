import React from 'react'
import '../style.css'
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
        const id = e.target.getAttribute("id_button")
        this.setState({
            conteudo: 'editor',
            id_pessoa: id
        })
    }
    excluirRegistro=e=>{
        const id = e.target.getAttribute("id_button")
        const linha = document.getElementById(id)
        fetch(`http://localhost:8080/pessoa/remover/${id}`, {method:'DELETE'})
            .then(resp=>resp.json())
            .then(resp=>{
                    linha.style.display = 'none'
                    alert(resp.message)
            })
    }
    render(){
        if(this.state.conteudo === 'tabela'){
            return(
                <PageDefault>
                    <div className="div_table">
                        <table>
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
                                <Body exp={this.expandirTabela} edit={this.editarTabela} excl={this.excluirRegistro}/>
                            </tbody>
                        </table>
                    </div>
                </PageDefault>
            )
        }
        if(this.state.conteudo === 'tabela-expandida'){
            return(
                <PageDefault>
                    <button className="btn_voltar" onClick={this.atrofiarTabela}>voltar</button>
                    <div className="div_table">
                        <table>
                            <TabelaExp id_pessoa={this.state.id_pessoa}/>
                        </table>
                    </div>
                </PageDefault>
            )
        }
        else{
            return(
                <PageDefault>
                    <EditTabela btn_func={this.atrofiarTabela} id_pessoa={this.state.id_pessoa}/>
                </PageDefault>
            )
        }
    }
}