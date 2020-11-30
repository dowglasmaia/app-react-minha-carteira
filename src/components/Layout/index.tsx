import React from 'react';

import { Grid } from './style';

import MainHeader from '../MainHeader';
import Aside from '../Aside';
import Content from '../Content';

/* {children} para injetar componentes filhos */
const Layout: React.FC = ({ children }) => {
    return (
        <Grid>
            {/* MainHeader */}
            <MainHeader />

            {/* Aside */}
            <Aside />

            {/* Content */}
            <Content >
             { children }
            </Content>

        </Grid>
    );
}

export default Layout;