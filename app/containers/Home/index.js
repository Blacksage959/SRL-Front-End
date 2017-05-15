/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Header from 'components/Header';

export default class Home extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>

        <Header/>
        
      </div>
    );
  }
}
