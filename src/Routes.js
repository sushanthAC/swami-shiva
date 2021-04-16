import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Sale from './components/Sales/Sales';
import Purchase from './components/Purchase/Purchase';

import {SalesProvider} from './contexts/SalesContext';

const Routes = () => {
    return (
        <div>
            <Switch>
                <SalesProvider>
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/sales"  component={Sale} />
                </SalesProvider>
                <Route path="/purchase" component={Purchase} />
            </Switch>
        </div>
    );

}

export default Routes;