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
        fetch(`http://localhost:8080/buscar/${this.props.id_pessoa}`)
            .then(resp=>resp.json())
            .then(
                (result)=>{
                    let pessoa = result[0]
                    pessoa['data_nasc'] = pessoa['data_nasc'].split('T')[0]
                    this.setState({
                        pessoa
                    })
                },
                (error)=>{
                    return(<div>error na busca</div>)
                }
            )
    }
    render(){        
        return(
            <React.Fragment>
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
            </React.Fragment>
        )
    }
}