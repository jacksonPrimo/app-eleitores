import React from 'react'
import './style.css'
import PageDefault from '../../../components/pageDefault'
import Tabela from './components/tabela'
export default class Pesquisa extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            type: 'text',
            valueInput:'',
            valueSelect: '',
            value: ''
        }
    }
    changeInput=(e)=>{
        this.setState({
            value: '',
            valueInput: e.target.value
        })
    }
    changeSelect=(e)=>{
        if(e.target.value === 'data_nasc'){
            this.setState({
                type: 'date',
                value: '',
                valueSelect: e.target.value
            })
        }else{
            this.setState({
                type: 'text',
                value: '',
                valueSelect: e.target.value
            })
        }
    }
    submit=(e)=>{
        e.preventDefault()
        let concat = `${this.state.valueSelect}=${this.state.valueInput}`
        this.setState({value: concat})
    }
    render(){
        return(
            <PageDefault>
                <div className="div_pesquisa">
                    <form onSubmit={this.submit}>
                        <select required name="nomePesquisa" id="nomePesquisa" onChange={this.changeSelect}>
                            <option value="">pesquisar</option>
                            <option value="nome">Nome</option>
                            <option value="cidade">Cidade</option>
                            <option value="endereço">Endereço</option>
                            <option value="seção">seção</option>
                            <option value="apelido">apelido</option>
                            <option value="data_nasc">data de nascimento</option>
                            <option value="telefone">telefone</option>
                            <option value="ctt_ref">referência</option>
                            <option value="situação">Situação</option>
                        </select>
                        <input required onChange={this.changeInput} type={this.state.type} name={this.props.nomePesquisa}/>
                        <button type="submit"><i class="fas fa-search"></i></button>
                    </form>
                    {
                    this.state.value === ''
                    ?''
                    :<Tabela valueBusca={this.state.value}/>
                    }
                </div>
            </PageDefault>
        )
    }
}