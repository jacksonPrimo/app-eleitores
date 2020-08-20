import React from 'react'
import Body from './body-table'
import TabelaExp from '../../relatorio_pessoa/components/tabela_expandida'
import EditTabela from '../../relatorio_pessoa/components/editar_tabela'
export default class Tabela extends React.Component{
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
                            <Body valueBusca={this.props.valueBusca} exp={this.expandirTabela} edit={this.editarTabela} excl={this.excluirRegistro}/>
                        </tbody>
                    </table>
                </div>
            )
        }
        if(this.state.conteudo === 'tabela-expandida'){
            return(
                <React.Fragment>
                    <button className="btn_voltar" onClick={this.atrofiarTabela}>voltar</button>
                    <div className="div_table">
                        <table className="tabela_pessoa">
                            <TabelaExp id_pessoa={this.state.id_pessoa}/>
                        </table>
                    </div>
                </React.Fragment>
            )
        }
        else{
            return(
                <EditTabela btn_func={this.atrofiarTabela} id_pessoa={this.state.id_pessoa}/>
            )
        }
    }
}