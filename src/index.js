import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';

import CadastroVideo from './pages/cadastro/Video'
import CadastroCategoria from './pages/cadastro/Categoria'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
//faz o roteamento da página
//ao mudar o path, a página entra em outra sem recarregar

const Pagina404 = () => (<div>Página 404 - Erro</div>)

ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact/>
        {/* exact é para procurar a rota exata, nesse caso a home */}

        <Route path='/cadastro/video' component={CadastroVideo}/>
        <Route path='/cadastro/categoria' component={CadastroCategoria}/>

        {/* Se não encontrar a rota, mostra uma tela de erro */}
        <Route component={Pagina404} />

      </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

//inicia o react