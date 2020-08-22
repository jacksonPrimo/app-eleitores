import React from 'react'
export default class Body extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: []
        }
    }
    componentDidMount(){
        fetch(`http://localhost:8080/secao/filtrar/${this.props.valueBusca}`)
            .then(resp => resp.json())
            .then(resp =>{
                if(resp.erro){
                    this.setState({error: resp.erro})
                }else{
                    if(resp === []){
                        this.setState({error: 'resultado não encontrado'})
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
                    this.state.data.map((sec, index)=>
                        <tr key={index} id={sec.id}>
                            <td>{sec.cidade}</td>
                            <td>{sec.capacidade}</td>
                            <td>{sec.zona}</td>
                            <td>{sec.numero}</td>
                            <td>{sec.endereço}</td>
                            <td>{sec.referência}</td>
                            <td class="options">
                                <i className="fas fa-pencil editar" 
                                    id_button={sec.id}
                                    onClick={this.props.edit}>    
                                </i>
                                <i className="fas fa-trash excluir" 
                                    id_button={sec.id}
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