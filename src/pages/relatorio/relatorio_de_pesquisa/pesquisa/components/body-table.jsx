import React from 'react'
export default class Body extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isLoaded: false,
            data: []
        }
    }
    componentDidMount(){
        fetch('http://localhost:8080/pessoa/listar')
            .then(resp => resp.json())
            .then(
                (result)=>{
                    this.setState({data: result})
                },
                (error)=>{
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
    }
    render(){
        if(this.state.error){
            return(
                <tr>
                    <td>erro</td>
                    <td>erro</td>
                    <td>erro</td>
                    <td>erro</td>
                    <td>erro</td>
                    <td>erro</td>
                </tr>
            )
        }
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
                            <td class="options">
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