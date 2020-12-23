import React from 'react';
import { Switch, Route } from "react-router-dom";

import SingnIn from '../Pages/Signin';

const AuthRoutes: React.FC = () => (
    <Switch>
        <Route component={SingnIn}/>
    </Switch>

);

export default AuthRoutes;