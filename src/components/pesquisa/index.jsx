import './style.css'
import PageDefault from '../pageDefault'
import ConteudoTabela from './components/conteudo_tabela.jsx' 
export default class NavBar extends React.Component{
    constructor(props){
        super(props)
        this.state({

        })
    }
    render(){
        return(
            <PageDefault>
                <div className="div_pesquisa">
                    <form>
                        <input type="text" name={props.nomePesquisa}/>
                        <button type="submit"><i class="fas fa-search"></i></button>
                    </form>
                    <table className="tabela_pessoa">
                        
                    </table>
                </div>
            </PageDefault>
        )
    }
}