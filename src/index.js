import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './index.css';
import * as serviceWorker from './serviceWorker';
import Home from './pages/home/index'
import CadPessoa from './pages/cadastro/cadastro_pessoa/index'
import CadSecao from './pages/cadastro/cadastro_secao/index'
import RelatorioPess from './pages/relatorio/relatorio_pessoa/index'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/cadastrar/pessoa" component={CadPessoa}/>
        <Route path="/cadastrar/secao" component={CadSecao}/>
        <Route path="/relatorio/pessoa" component={RelatorioPess}/>
        {/* <Route path="/relatorio/secao" component={}/> */}
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
