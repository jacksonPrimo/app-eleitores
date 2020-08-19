import React from 'react'
import Editar from '../../../relatorio_pessoa/utils/put'
import DivButton from '../../../../../components/formulario/div_button'
import PageDefault from '../../../../../components/pageDefault'
let initialState = {
    cidade: '',
    nome: '',
    apelido: '',
    data_nasc: '',
    endereço: '',
    seção: '',
    telefone: '',
    ctt_ref: '',
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
                    pessoa['data_nasc'] = pessoa['data_nasc'].split('T')[0]
                    initialState = {...pessoa}
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
        this.setState(...initialState)
    }
    render(){
        let action = `http://localhost:8080/pessoa/editar/${this.props.id_pessoa}`
        return(
            <React.Fragment>
                <button className="btn_voltar" onClick={this.props.btn_func}>voltar</button>
                <form className="form-pes" name='form-pes' action={action} method='PUT' onSubmit={Editar}>
                    <div className="entrada">
                        <select required className="cidade" name="cidade" id="cidade" onChange={this.change} value={this.state.cidade}>
                            <option value=''>Cidade</option>
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
                        <input required type="date" name='data_nasc' placeholder='Data de Nascimento:' onChange={this.change} value={this.state.data_nasc}/>
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
                        <input required type="text" name='ctt_ref' placeholder='Contato/Referência:' onChange={this.change} value={this.state.ctt_ref}/>
                    </div>
                    <div className="entrada">
                        <select required name="situação" id="situação" onChange={this.change} value={this.state.situação}>
                            <option value="">Situação do Eleitor</option>
                            <option value="votante">Eleitor</option>
                            <option value="nao votante">Não Eleitor</option>
                            <option value="indeciso">Eleitor indeciso</option>
                        </select>
                    </div>
                    <DivButton name="Registrar" type="submit"/>
                    <DivButton name="Cancelar" type="reset" onClik={this.reset}/>
                </form>
            </React.Fragment>
        )
    }
}