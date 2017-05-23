/**
*
* HomeSales
*
*/

import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import FilterListIcon from 'material-ui/svg-icons/content/filter-list';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from "react-router";

class HomeSales extends React.PureComponent {
  render() {
    return (
      <div>
        <div>

        <div>
          <Link to={"/allproducts"}><h2>Products +</h2></Link>
        </div>

        <div>
          <Link to={"/education"}><h2>Education +</h2></Link>
        </div>

        </div>
      </div>
    );
  }
}

export default HomeSales;
