/*
 *
 * Ecat
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class Ecat extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet title="Ecat" meta={[ { name: 'description', content: 'Description of Ecat' }]}/>

      //Remove this line and you can start writing your code here.
      </div>
    );
  }
}
