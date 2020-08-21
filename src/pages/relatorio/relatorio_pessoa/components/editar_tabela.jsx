import React from 'react'
import Editar from '../utils/put'
import DivButton from '../../../../components/formulario/div_button'
let initialState = {
    cidade: '',
    nome: '',
    apelido: '',
    data_de_nascimento: '',
    endereço: '',
    seção: '',
    telefone: '',
    referência: '',
    situação: '',
    id: ''
}
export default class EditTabela extends React.Component{
    constructor(props){
        super(props)
        this.state = {...initialState}
    }
    componentDidMount(){
        fetch(`http://localhost:8080/pessoa/buscar/${this.props.id_pessoa}`)
            .then(resp=>resp.json())
            .then(
                (result)=>{
                    let pessoa = result[0]
                    pessoa['data_de_nascimento'] = pessoa['data_de_nascimento'].split('T')[0]
                    initialState = {...pessoa}
                    console.log(initialState)
                    this.setState({
                        ...pessoa
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
        let action = `http://localhost:8080/pessoa/atualizar/${this.props.id_pessoa}`
        return(
            <React.Fragment>
                <button className="btn_voltar" onClick={this.props.btn_func}>voltar</button>
                <form className="form_pes" action={action} method='put' onSubmit={Editar}>
                    <div className="entrada">
                        <select required name="cidade" id="cidade" onChange={this.change} value={this.state.cidade}>
                            <option value="">Cidade</option>
                            <option value="Carutapera">Carutapera-MA</option>
                            <option value="Amapá">Amapá-MA</option>
                            <option value="Cândido Mendes">Cândido Mendes-MA</option>
                            <option value="São luis">São Luís-MA</option>    
                        </select>
                    </div>
                    <div className="entrada">
                        <input required type="text" name='nome' placeholder='Nome:' onChange={this.change} value={this.state.nome}/>
                    </div>
                    <div className="entrada">
                        <input required type="text" name='apelido' placeholder='Apelido:' onChange={this.change} value={this.state.apelido}/>
                    </div>
                    <div className="entrada">
                        <input required type="date" name='data_de_nascimento' placeholder='Data de Nascimento:' onChange={this.change} value={this.state.data_de_nascimento}/>
                    </div>
                    <div className="entrada endereço">
                        <input required type="text" name='endereço' placeholder='Endereço:' onChange={this.change} value={this.state.endereço}/>
                    </div>
                    <div className="entrada">
                        <input required type="text" name='seção' placeholder='Seção:' onChange={this.change} value={this.state.seção}/>
                    </div>
                    <div className="entrada">
                        <input required type="text" name='telefone' placeholder='Ex.: (00) 0000-0000' onChange={this.change} value={this.state.telefone}/>
                    </div>
                    <div className="entrada">
                        <input required type="text" name='referência' placeholder='Referência:' onChange={this.change} value={this.state.referência}/>
                    </div>
                    <div className="entrada">
                        <select required name="situação" id="situação" onChange={this.change} value={this.state.situação}>
                            <option value="">Situação do Eleitor</option>
                            <option value="Eleitor">Eleitor</option>
                            <option value="Nao Eleitor">Não Eleitor</option>
                            <option value="Indeciso">Indeciso</option>
                        </select>
                    </div>
                    <DivButton name="Atualizar" type="submit"/>
                    <DivButton name="Cancelar" type="reset" func={this.reset}/>
                </form>
            </React.Fragment>
        )
    }
}