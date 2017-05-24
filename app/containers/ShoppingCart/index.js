/*
 *
 * ShoppingCart
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class ShoppingCart extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet title="ShoppingCart" meta={[ { name: 'description', content: 'Description of ShoppingCart' }]}/>

    <h1>Shopping Cart</h1>
      </div>
    );
  }
}
