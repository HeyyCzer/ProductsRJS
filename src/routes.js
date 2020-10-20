import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Componentes
import Main from './pages/main';
import Product from './pages/product';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/products/:id" component={Product} />
        </Switch>
    </BrowserRouter>
);

/*

     Acessar por "localhost/" levará para a página MAIN
     <Route exact path="/" component={Main} />

     Parâmetros devem ser feitos com ":NAME" como feito abaixo.
     <Route path="/products/:id" component={Product} />

*/

export default Routes;