/**
*
* Header
*
*/

import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import {Link} from "react-router";

class Header extends React.PureComponent {

  handleNav = (location) => {
    this.context.router.push(location);
  }


  render() {
    const mCont={
      width:"100%",
      height:"auto",
      backgroundColor:"white",


    }

    const bttn={
      border:"1px solid black",
      height:"auto",
      width:"auto",
    }

    const srlLogoPos={

    }
    return (
      <div>
        <div style={mCont}>
          <img style={srlLogoPos} src={"https://static1.squarespace.com/static/55f05957e4b049cf1b1396b0/t/5612d125e4b033aa912f3442/1444073766267/SumobotHeroImage_skinny.jpg"}/>

        <FlatButton  style={bttn} rippleColor="rgba(0,225,0,.7)" onTouchTap={()=> this.handleNav("/signin")}>sign in</FlatButton>
        <FlatButton  style={bttn} backgroundColor="rgba(0,0,0,.1)" rippleColor="rgba(0,225,0,.7)" onTouchTap={()=> this.handleNav("/signup")}>JOIN</FlatButton>

        </div>
      </div>
    );
  }
}

Header.contextTypes = {
  router: React.PropTypes.object
}

export default Header;
