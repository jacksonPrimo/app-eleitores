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
            .then(resp=>{
                if(resp.erro){
                    alert(resp.erro)
                    this.setState({error: resp.erro})
                }else{
                    if(resp.length === 0){
                        const erro = 'sem seções cadastradas'
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
                    <td><i className="fas fa-times"></i></td>
                </tr>
            )
        }
        return(
            <React.Fragment>
                {
                    this.state.data.map((sec, index)=>
                        <tr key={index} id={sec.numero}>
                            <td>{sec.cidade}</td>
                            <td>{sec.capacidade}</td>
                            <td>{sec.zona}</td>
                            <td>{sec.numero}</td>
                            <td>{sec.endereço}</td>
                            <td>{sec.referência}</td>
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