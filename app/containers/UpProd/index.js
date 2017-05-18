/*
 *
 * UpProd
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class UpProd extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet title="UpProd" meta={[ { name: 'description', content: 'Description of UpProd' }]}/>

      //Remove this line and you can start writing your code here.
      </div>
    );
  }
}
