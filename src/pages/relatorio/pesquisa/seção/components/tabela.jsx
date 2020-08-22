import React from 'react'
import Body from './body-table'
import EditTabela from '../../../relatorio_secao/components/editar_tabela'
export default class Tabela extends React.Component{
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
        const id = e.target.getAttribute("id_button")
        const linha = document.getElementById(id)
        fetch(`http://localhost:8080/secao/remover/${id}`, {method:'DELETE'})
            .then(resp=>resp.json())
            .then(resp=>{
                if(resp.erro){
                    alert(resp.erro)    
                }else{
                    linha.style.display = 'none'
                    alert(resp.message)
                }
            })
    }
    render(){
        if(this.state.conteudo === 'tabela'){
            return(
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
                            <Body valueBusca={this.props.valueBusca} edit={this.editarTabela} excl={this.excluirRegistro}/>
                        </tbody>
                    </table>
                </div>
            )
        }
        else{
            return(
                <EditTabela btn_func={this.atrofiarTabela} id_pessoa={this.state.numero_sec}/>
            )
        }
    }
}