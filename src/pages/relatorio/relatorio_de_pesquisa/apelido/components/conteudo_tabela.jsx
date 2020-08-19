import React from 'react'
function Tr(props){
    return(
        <tr>
            <th>{props.name}</th>
            <td>{props.value}</td>
        </tr>        
    )
}
export default class TabelaExp extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            pessoa: {}
        }
    }
    componentDidMount(){
        fetch(`http://localhost:8080/pessoa/buscar/${this.props.valueBusca}`)
            .then(resp=>resp.json())
            .then(
                (result)=>{
                    if (result[0]){
                        let pessoa = result[0]
                        pessoa['data_nasc'] = pessoa['data_nasc'].split('T')[0]
                        this.setState({
                            pessoa
                        })
                    }else{
                        this.setState({error: 'pessoa não encontrada'})
                    }
                },
                (error)=>{
                    this.setState({error: 'erro na busca'})
                    return('error na busca')
                }
            )
    }
    render(){
        if(this.state.error){
            return(
                <h1>{this.state.error}</h1>
            )    
        }else{
            return(
                <table>
                    <Tr name="Nome" value={this.state.pessoa.nome}/>
                    <Tr name="Apelido" value={this.state.pessoa.apelido}/>
                    <Tr name="Cidade" value={this.state.pessoa.cidade}/>
                    <Tr name="Endereço" value={this.state.pessoa.endereço}/>
                    <Tr name="Seção" value={this.state.pessoa.seção}/>
                    <Tr name="Telefone" value={this.state.pessoa.telefone}/>
                    <Tr name="Contato/Referência" value={this.state.pessoa.ctt_ref}/>
                    <Tr name="Data de Nascimento" value={this.state.pessoa.data_nasc}/>
                    <Tr name="Id" value={this.state.pessoa.id}/>
                    <Tr name="Situação" value={this.state.pessoa.situação}/>
                </table>
            )
        }
    }
}