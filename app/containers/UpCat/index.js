/*
 *
 * UpCat
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class UpCat extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet title="UpCat" meta={[ { name: 'description', content: 'Description of UpCat' }]}/>

      //Remove this line and you can start writing your code here.
      </div>
    );
  }
}
