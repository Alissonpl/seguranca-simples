import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Cadastro from './pages/Cadastro/index';
import Lista from './pages/Lista/index';
import ListaUm from './pages/ListaUm/index';
import Token from './pages/Token/index';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/cadastro" component={Cadastro}/>
                <Route path="/lista" component={Lista}/>
                <Route path="/listaum" component={ListaUm}/>
                <Route path="/token" component={Token}/>
            </Switch>
        
        </BrowserRouter>

    );

}