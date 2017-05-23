/**
*
* HomeContent
*
*/

import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import FilterListIcon from 'material-ui/svg-icons/content/filter-list';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from "react-router";

class HomeContent extends React.PureComponent {
  handleNav = (location) => {
    this.context.router.push(location);
  }

  render() {

    const bttn={
      border:"1px solid black",
      height:"auto",
      width:"auto",
    }


    return (
      <div>
        <div>
        <h1>THE PROGRAMMERS OF THE FUTURE</h1>
        <p>Teaching | Thinking | Building </p> <Link><p>Read about our programs...</p></Link>

        <FlatButton  style={bttn} rippleColor="rgba(0,225,0,.7)" onTouchTap={()=> this.handleNav("/signin")}>sign in</FlatButton>
        <FlatButton  style={bttn} backgroundColor="rgba(0,0,0,.1)" rippleColor="rgba(0,225,0,.7)" onTouchTap={()=> this.handleNav("/signup")}>JOIN</FlatButton>
        </div>
      </div>
    );
  }
}

HomeContent.contextTypes = {
  router: React.PropTypes.object
}


export default HomeContent;
