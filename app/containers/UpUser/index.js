/*
 *
 * UpUser
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class UpUser extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet title="UpUser" meta={[ { name: 'description', content: 'Description of UpUser' }]}/>

      //Remove this line and you can start writing your code here.
      </div>
    );
  }
}
