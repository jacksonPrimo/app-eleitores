import React from 'react'
import './style.css'
import Cadastrar from '../utils/register'
import PageDefault from '../../../components/pageDefault/index'
import DivInput from '../../../components/formulario/div_input'
import DivSelect from '../../../components/formulario/div_select'
import DivButton from '../../../components/formulario/div_button'
export default function CadZona(){
    return(
        <PageDefault>
            <form className="form_zona" name='form_zona' action='http://localhost:8080/secao/adicionar' method='post' onSubmit={e=>Cadastrar(e)}>
                <DivInput type='text' name='numero' placeholder='Numero:'/>
                {/* <DivSelect name="cidade">
                    <option value="">Cidade</option>
                    <option value="Carutapera">Carutapera-MA</option>
                    <option value="Amapá">Amapá-MA</option>
                    <option value="Cândido Mendes">Cândido Mendes-MA</option>
                    <option value="São luis">São Luís-MA</option>
                </DivSelect> */}
                <DivInput type='text' name='capacidade' placeholder='Capacidade:'/>
                <DivInput type='text' name='endereco' placeholder='Endereço:'/>
                <DivButton name="Registrar" type="submit"/>
                <DivButton name="Cancelar" type="reset"/>
            </form>
        </PageDefault>
    )
}