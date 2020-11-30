import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/GlobalStyles';
import Layout from './components/Layout';
import Dashboard from './Pages/Dashboard';

import Lista from './Pages/List';

import dark from './styles/themes/dark';

// import light from './styles/themes/light';

const App: React.FC = () => {

    return (
        <ThemeProvider theme={dark}>
            <GlobalStyles />
            <Layout >
                <Lista/>
            </Layout>
        </ThemeProvider>
    );
}

export default App;