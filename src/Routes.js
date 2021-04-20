import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Sale from './components/Sales/Sales';
import Purchase from './components/Purchase/Purchase';
import ProductListing from './components/Products/ProductListing';
import ProductDetails from './components/Products/productDetails';

import {SalesProvider} from './contexts/SalesContext';

const Routes = () => {
    return (
        <div>
            <SalesProvider>
                <Switch>
                        <Route path="/" exact component={Dashboard} />
                        <Route path="/sales" exact component={Sale} />
                        <Route path="/purchase" exact component={Purchase} />
                        <Route path="/products" exact component={ProductListing} />
                        <Route path="/product/:productID" exact component={ProductDetails} />
                </Switch>
            </SalesProvider>
        </div>
    );

}

export default Routes;