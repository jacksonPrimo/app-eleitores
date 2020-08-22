import React from 'react'
import '../style.css'
import PageDefault from '../../../components/pageDefault/index'
import Body from './components/body_table'
import EditTabela from './components/editar_tabela'
export default class Table extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            conteudo: 'tabela'
        }
    }
    atrofiarTabela=(e)=>{
        this.setState({conteudo: 'tabela'})
    }
    editarTabela=e=>{
        const id = e.target.getAttribute("id_button")
        this.setState({
            conteudo: 'editor',
            numero_sec: id
        })
    }
    excluirRegistro=e=>{
        const numero = e.target.getAttribute("id_button")
        const linha = document.getElementById(numero)
        fetch(`http://localhost:8080/secao/remover/${numero}`, {method:'DELETE'})
            .then(resp=>resp.json())
            .then(
                (resp)=>{
                    linha.style.display = 'none'
                    alert(resp.message)
                },
                (error)=>{
                    alert("erro ao remover esta seção")
                }
            )
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
                                    <th>Capacidade</th>
                                    <th>Zona</th>
                                    <th>Numero</th>
                                    <th>Endereço</th>
                                    <th>Referência</th>
                                    <th>opções</th>
                                </tr>
                            </thead>
                            <tbody>
                                <Body edit={this.editarTabela} excl={this.excluirRegistro}/>
                            </tbody>
                        </table>
                    </div>
                </PageDefault>
            )
        }
        else{
            return(
                <PageDefault>
                    <EditTabela btn_func={this.atrofiarTabela} numero_sec={this.state.numero_sec}/>
                </PageDefault>
            )
        }
    }
}