import React from 'react'
import Editar from '../utils/put'
import DivButton from '../../../../components/formulario/div_button'
let initialState = {
    numero: '',
    cidade: '',
    capacidade: '',
    endereço: ''
}
export default class EditTabela extends React.Component{
    constructor(props){
        super(props)
        this.state = {...initialState}
    }
    componentDidMount(){
        fetch(`http://localhost:8080/secao/buscar/${this.props.numero_sec}`)
            .then(resp=>resp.json())
            .then(
                (result)=>{
                    let secao = result[0]
                    initialState = {...secao}
                    this.setState({
                        ...secao
                    })
                },
                (error)=>{
                    return('error na busca')
                }
            )
    }
    change= e =>{
        console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    reset=e=>{
        e.preventDefault()
        this.setState({...initialState})
    }
    render(){
        let action = `http://localhost:8080/secao/atualizar/${this.props.numero_sec}`
        return(
            <React.Fragment>
                <button className="btn_voltar" onClick={this.props.btn_func}>voltar</button>
                <form className="form-sec" action={action} method='put' onSubmit={Editar}>
                    <div className="entrada cidade">
                        <select required name="cidade" id="cidade" onChange={this.change} value={this.state.cidade}>
                            <option value=''>Cidade</option>
                            <option value="Carutapera">Carutapera-MA</option>
                            <option value="Amapá">Amapá-MA</option>
                            <option value="Cândido Mendes">Cândido Mendes-MA</option>
                            <option value="São luis">São Luís-MA</option>    
                        </select>
                    </div>
                    <div className="entrada capacidade">
                        <input required type="text" name='capacidade' placeholder='Capacidade:' onChange={this.change} value={this.state.capacidade}/>
                    </div>
                    <div className="entrada zona">
                        <input required type="text" name='zona' placeholder='Zona:' onChange={this.change} value={this.state.zona}/>
                    </div>
                    <div className="entrada numero">
                        <input required type="text" name='numero' placeholder='Numero:' onChange={this.change} value={this.state.numero}/>
                    </div>
                    <div className="entrada endereço">
                        <input required type="text" name='endereço' placeholder='Endereço:' onChange={this.change} value={this.state.endereço}/>
                    </div>
                    <div className="entrada referência">
                        <input required type="text" name='referência' placeholder='referência:' onChange={this.change} value={this.state.referência}/>
                    </div>
                    <DivButton name="Atualizar" type="submit"/>
                    <DivButton name="Cancelar" type="reset" func={this.reset}/>
                </form>
            </React.Fragment>
        )
    }
}