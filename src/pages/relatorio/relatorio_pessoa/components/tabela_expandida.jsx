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
        fetch(`http://localhost:8080/pessoa/buscar/${this.props.id_pessoa}`)
            .then(resp=>resp.json())
            .then(resp=>{
                if(resp.erro){
                    alert(resp.erro)
                    this.setState({error: resp.erro})
                }else{
                    if(resp.length === 0){
                        const erro = 'falha em expandir a tabela'
                        alert(erro)
                        this.setState({error: erro})
                    }else{
                        let pessoa = resp[0]
                        pessoa['data_de_nascimento'] = pessoa['data_de_nascimento'].split('T')[0]
                        this.setState({
                            pessoa
                        })
                    }
                }
            })
    }
    render(){
        if(this.state.error){
            return(
                <React.Fragment>
                    <Tr name="Nome" value="error"/>
                    <Tr name="Apelido" value="error"/>
                    <Tr name="Cidade" value="error"/>
                    <Tr name="Endereço" value="error"/>
                    <Tr name="Seção" value="error"/>
                    <Tr name="Telefone" value="error"/>
                    <Tr name="Contato/Referência" value="error"/>
                    <Tr name="Data de Nascimento" value="error"/>
                    <Tr name="Id" value="error"/>
                    <Tr name="Situação" value="error"/>
                </React.Fragment>
            )    
        }else{
            return(
                <React.Fragment>
                    <Tr name="Nome" value={this.state.pessoa.nome}/>
                    <Tr name="Apelido" value={this.state.pessoa.apelido}/>
                    <Tr name="Cidade" value={this.state.pessoa.cidade}/>
                    <Tr name="Endereço" value={this.state.pessoa.endereço}/>
                    <Tr name="Seção" value={this.state.pessoa.seção}/>
                    <Tr name="Telefone" value={this.state.pessoa.telefone}/>
                    <Tr name="Contato/Referência" value={this.state.pessoa.referência}/>
                    <Tr name="Data de Nascimento" value={this.state.pessoa.data_de_nascimento}/>
                    <Tr name="Id" value={this.state.pessoa.id}/>
                    <Tr name="Situação" value={this.state.pessoa.situação}/>
                </React.Fragment>
            )
        }        
    }
}