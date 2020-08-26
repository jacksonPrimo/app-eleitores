import React from 'react'
export default class Body extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: []
        }
    }
    componentDidMount(){
        fetch(`http://localhost:8080/pessoa/filtrar/${this.props.valueBusca}`)
            .then(resp => resp.json())
            .then(resp => {
                if(resp.erro){
                    alert(resp.erro)
                    this.setState({error: resp.erro})
                }else{
                    if(resp.length === 0){
                        const erro = 'pessoa não encontrado'
                        alert(erro)
                        this.setState({error: erro})
                    }else{
                        this.setState({data: resp})
                    }
                }
            })
    }
    render(){
        if(this.state.error){
            return(
                <tr>
                    <td><i className="fas fa-times"></i></td>
                    <td><i className="fas fa-times"></i></td>
                    <td><i className="fas fa-times"></i></td>
                    <td><i className="fas fa-times"></i></td>
                    <td><i className="fas fa-times"></i></td>
                    <td><i className="fas fa-times"></i></td>
                </tr>
            )
        }else{
            return(
                <React.Fragment>
                    {
                        this.state.data.map((pessoa, index)=>
                            <tr key={index} id={pessoa.id}>
                                <td>{pessoa.cidade}</td>
                                <td>{pessoa.nome}</td>
                                <td>{pessoa.seção}</td>
                                <td>{pessoa.situação}</td>
                                <td>{pessoa.id}</td>
                                <td className="options">
                                    <i className="fas fa-arrows-alt expandir" 
                                        id_button={pessoa.id}
                                        onClick={this.props.exp}>
                                    </i>
                                    <i className="fas fa-pencil editar" 
                                        id_button={pessoa.id}
                                        onClick={this.props.edit}>    
                                    </i>
                                    <i className="fas fa-trash excluir" 
                                        id_button={pessoa.id}
                                        onClick={this.props.excl}>
                                    </i>
                                </td>
                            </tr>  
                        )
                    }       
                </React.Fragment>
            )
        }
    }
}