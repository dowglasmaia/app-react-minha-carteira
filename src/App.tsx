import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/GlobalStyles';

/* import do thema personalizado e depois importa o provid no index */
import {useTheme} from './hooks/theme';

import Routes from './routes'

const App: React.FC = () => {
    const {theme} = useTheme();

    return (
        <ThemeProvider theme={theme}>
           
            <GlobalStyles />
            
            {/** Carrega as paginas de acordo com sua rota */}
            <Routes />

        </ThemeProvider>
    );
}

export default App;