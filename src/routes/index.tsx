/* Definindo Regras de Navegação com autorizações de Rotas */
import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import { useAuth } from '../hooks/auth';

import App from './app.routes';
import Auth from './auth.routes';

const Routes: React.FC = () => {

    const { logged } = useAuth();

    console.log(logged);

    return (
        <BrowserRouter>
        
            {/* se o usuario estar logando vai para App se não vai para Auth*/}
            { logged ? <App /> : <Auth />}

        </BrowserRouter>
    );
}

export default Routes;

