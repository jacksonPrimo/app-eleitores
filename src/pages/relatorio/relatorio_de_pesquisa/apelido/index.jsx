import React from 'react'
import './style.css'
import PageDefault from '../../../../components/pageDefault'
import ConteudoTabela from './components/conteudo_tabela.jsx' 
export default class PesquisaApelido extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            valueChange:'',
            value: ''
        }
    }
    submit=(e)=>{
        e.preventDefault()
        this.setState({value: this.state.valueChange})
    }
    change=(e)=>{
        this.setState({
            value: '',
            valueChange: e.target.value
        })
    }
    render(){
        return(
            <PageDefault>
                <div className="div_pesquisa">
                    <form onSubmit={this.submit}>
                        <input onChange={this.change} type="text" name={this.props.nomePesquisa}/>
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