import React from 'react'
import './style.css'
import PageDefault from '../../../../components/pageDefault'
import ConteudoTabela from './components/body-table.jsx' 
//import DivSelect from '../../../../components/formulario/div_select'
export default class Pesquisa extends React.Component{
    constructor(props){
        super(props)
        this.state = {
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
        this.setState({
            value: '',
            valueSelect: e.target.value
        })
    }
    submit=(e)=>{
        e.preventDefault()
        let concat = `${this.state.valueSelect}-${this.state.valueInput}`
        this.setState({value: concat})
    }
    render(){
        return(
            <PageDefault>
                <div className="div_pesquisa">
                    <form onSubmit={this.submit}>
                        <select required name="nomePesquisa" id="nomePesquisa" onChange={}>
                            <option value="">pesquisar</option>
                            <option value="nome">Nome</option>
                            <option value="cidade">Cidade</option>
                            <option value="endereço">Endereço</option>
                            <option value="seção">seção</option>
                            <option value="apelido">apelido</option>
                            <option value="data_nasc">data de nascimento</option>
                            <option value="telefone">telefone</option>
                            <option value="referência">referência</option>
                        </select>
                        <input required onChange={this.change} type="text" name={this.props.nomePesquisa}/>
                        <button type="submit"><i class="fas fa-search"></i></button>
                    </form>
                    {
                    this.state.value === ''
                    ?''
                    :<ConteudoTabela valueBusca={this.state.value}/>
                    }
                </div>
            </PageDefault>
        )
    }
}