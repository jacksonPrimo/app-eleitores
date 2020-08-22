import React from 'react'
import '../style.css'
import PageDefault from '../../../../components/pageDefault'
import Tabela from './components/tabela'
export default class PesquisaSec extends React.Component{
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
                            <option value="numero">Numero</option>
                            <option value="cidade">Cidade</option>
                            <option value="zona">Zona</option>
                            <option value="endereço">Endereço</option>
                            <option value="referência">Referência</option>
                            <option value="capacidade">Capacidade</option>
                        </select>
                        <input className="input_pesquisa" required onChange={this.changeInput} type={this.state.type} name="valorPesquisa"/>
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