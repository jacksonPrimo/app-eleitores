import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './index.css';
import * as serviceWorker from './serviceWorker';
import Home from './pages/home/index'
import CadPessoa from './pages/cadastro/cadastro_pessoa'
import CadSecao from './pages/cadastro/cadastro_secao'
import RelatorioPess from './pages/relatorio/relatorio_pessoa'
import RelatorioSec from './pages/relatorio/relatorio_secao'
// import Pesquisa from './pages/relatorio/pesquisa/pessoa'
import PesquisaPess from './pages/relatorio/pesquisa/pessoa'
import PesquisaSec from './pages/relatorio/pesquisa/seção'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/cadastrar/pessoa" component={CadPessoa}/>
        <Route path="/cadastrar/secao" component={CadSecao}/>
        <Route path="/relatorio/pessoa" component={RelatorioPess}/>
        <Route path="/relatorio/secao" component={RelatorioSec}/>
        {/* <Route path="/relatorio/buscar/busca" component={Pesquisa}/> */}
        <Route path="/pesquisar/pessoa" component={PesquisaPess}/>
        <Route path="/pesquisar/secao" component={PesquisaSec}/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
