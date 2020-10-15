import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import FoodBuilder from './containers/FoodBuilder/FoodBuilder';
import Checkout from './containers/Checkout/Checkout';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/" exact component={FoodBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;