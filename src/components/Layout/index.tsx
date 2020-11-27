import React from 'react';

import { Grid } from './style';

import MainHeader from '../MainHeader';
import Aside from '../Aside';
import Content from '../Content';

const Layout: React.FC = () => {
    return (
        <Grid>
            {/* MainHeader */}
            <MainHeader />

            {/* Aside */}
            <Aside />

            {/* Content */}
            <Content />

        </Grid>
    );
}

export default Layout;