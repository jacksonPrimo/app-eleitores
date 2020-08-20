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
        fetch('http://localhost:8080/secao/listar')
            .then(resp => resp.json())
            .then(
                (result)=>{
                    if(result === []){
                        this.setState({
                            error: 'sem seções cadastradas'
                        })
                    }else{
                        this.setState({
                            data: result
                        })
                    }
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
                </tr>
            )
        }
        return(
            <React.Fragment>
                {
                    this.state.data.map((sec, index)=>
                        <tr key={index} id={sec.numero}>
                            <td>{sec.numero}</td>
                            <td>{sec.cidade}</td>
                            <td>{sec.capacidade}</td>
                            <td>{sec.endereço}</td>
                            <td>
                                <i className="fas fa-pencil editar" 
                                    id_button={sec.numero}
                                    onClick={this.props.edit}>    
                                </i>
                                <i className="fas fa-trash excluir" 
                                    id_button={sec.numero}
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