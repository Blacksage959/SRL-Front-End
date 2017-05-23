/*
 *
 * Education
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from "react-router";

export default class Education extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet title="Education" meta={[ { name: 'description', content: 'Description of Education' }]}/>

          <div>
            <Link to={"/"}><h1>Education -</h1></Link>
            <Link to={"/allproducts"}><h2>Products +</h2></Link>

          </div>
      </div>
    );
  }
}
