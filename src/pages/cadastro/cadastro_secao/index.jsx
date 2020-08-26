import React from 'react'
import './style.css'
import Cadastrar from '../utils/register'
import PageDefault from '../../../components/pageDefault/index'
import DivInput from '../../../components/formulario/div_input'
import DivSelect from '../../../components/formulario/div_select'
import DivButton from '../../../components/formulario/div_button'
export default function CadSecao(){
    return(
        <PageDefault>
            <form className="form-sec" name='form-sec' action='http://localhost:8080/secao/adicionar' method='post' onSubmit={e=>Cadastrar(e)}>
                <DivSelect name="cidade">
                    <option value="">Cidade</option>
                    <option value="Carutapera">Carutapera</option>
                    <option value="Amapá">Amapá</option>
                    <option value="Cândido Mendes">Cândido Mendes</option>
                    <option value="São luis">São Luís</option>
                </DivSelect>
                <DivInput required type='number' name='capacidade' placeholder='Capacidade:'/>
                <DivInput required type='number' name='zona' placeholder='Zona:'/>
                <DivInput required type='number' name='numero' placeholder='Numero:'/>
                <DivInput required type='text' name='endereço' placeholder='Endereço:'/>
                <DivInput type='text' name='referência' placeholder='Referência:'/>
                <DivButton name="Registrar" type="submit"/>
                <DivButton name="Cancelar" type="reset"/>
            </form>
        </PageDefault>
    )
}