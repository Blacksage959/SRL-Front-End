/*
 *
 * Eprod
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class Eprod extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet title="Eprod" meta={[ { name: 'description', content: 'Description of Eprod' }]}/>

      //Remove this line and you can start writing your code here.
      </div>
    );
  }
}
