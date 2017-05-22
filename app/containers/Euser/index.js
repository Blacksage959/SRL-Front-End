/*
 *
 * Euser
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class Euser extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet title="Euser" meta={[ { name: 'description', content: 'Description of Euser' }]}/>

      //Remove this line and you can start writing your code here.
      </div>
    );
  }
}
