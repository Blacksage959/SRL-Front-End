/*
 *
 * Erole
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class Erole extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet title="Erole" meta={[ { name: 'description', content: 'Description of Erole' }]}/>

      //Remove this line and you can start writing your code here.
      </div>
    );
  }
}
