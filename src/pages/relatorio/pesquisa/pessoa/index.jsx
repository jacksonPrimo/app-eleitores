import React from 'react'
import '../style.css'
import PageDefault from '../../../../components/pageDefault'
import Tabela from './components/tabela'
export default class PesquisaPess extends React.Component{
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
        if(e.target.value === 'data_de_nascimento'){
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
                    <form className="form_pesquisa" onSubmit={this.submit}>
                        <select className="select_pesquisa" required name="nomePesquisa" id="nomePesquisa" onChange={this.changeSelect}>
                            <option value="">pesquisar</option>
                            <option value="nome">Nome</option>
                            <option value="cidade">Cidade</option>
                            <option value="endereço">Endereço</option>
                            <option value="seção">seção</option>
                            <option value="apelido">apelido</option>
                            <option value="data_de_nascimento">data de nascimento</option>
                            <option value="telefone">telefone</option>
                            <option value="referência">referência</option>
                            <option value="situação">Situação</option>
                        </select>
                        <input className="input_pesquisa" required onChange={this.changeInput} type={this.state.type} name={this.props.nomePesquisa}/>
                        <button className="button_pesquisa" type="submit"><i class="fas fa-search"></i></button>
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