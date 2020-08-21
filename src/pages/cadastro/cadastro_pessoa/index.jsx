import React from 'react'
import './style.css'
import Cadastrar from '../utils/register'
import PageDefault from '../../../components/pageDefault/index'
import DivInput from '../../../components/formulario/div_input'
import DivSelect from '../../../components/formulario/div_select'
import DivButton from '../../../components/formulario/div_button'
export default function CadPessoa(props){
    return(
        <PageDefault>
            <form className="form_pes" action='http://localhost:8080/pessoa/adicionar' method='post' onSubmit={e=>Cadastrar(e)}>
                <DivSelect name="cidade">
                    <option value="">Cidade</option>
                    <option value="Carutapera">Carutapera-MA</option>
                    <option value="Amapá">Amapá-MA</option>
                    <option value="Cândido Mendes">Cândido Mendes-MA</option>
                    <option value="São luis">São Luís-MA</option>
                </DivSelect>
                <DivInput type="text" name='nome' placeholder='Nome:'/>
                <DivInput type="text" name='apelido' placeholder='Apelido:'/>
                <DivInput type="date" name='data_de_nascimento' placeholder='Data de Nascimento:'/>
                <DivInput type="text" name='endereço' placeholder='Endereço:'/>
                <DivInput type="text" name='seção' placeholder='Seção:'/>
                <DivInput type="text" name='telefone' placeholder='Ex.: (00) 0000-0000'/>
                <DivInput type="text" name='referência' placeholder='Referência:'/>
                <DivSelect name="situação">
                    <option value="">Situação do Eleitor</option>
                    <option value="Votante">Eleitor</option>
                    <option value="Nao Votante">Não Eleitor</option>
                    <option value="Indeciso">Eleitor indeciso</option>
                </DivSelect>
                <DivButton name="Registrar" type="submit"/>
                <DivButton name="Cancelar" type="reset"/>
            </form>
        </PageDefault>
    )
}