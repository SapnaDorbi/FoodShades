import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import FoodBuilder from './containers/FoodBuilder/FoodBuilder';
import Checkout from './containers/Checkout/Checkout';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
        <FoodBuilder />
        <Checkout />
        </Layout>
      </div>
    );
  }
}

export default App;