/*
 *
 * MyProfile
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class MyProfile extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet title="MyProfile" meta={[ { name: 'description', content: 'Description of MyProfile' }]}/>

      //Remove this line and you can start writing your code here.
      </div>
    );
  }
}
