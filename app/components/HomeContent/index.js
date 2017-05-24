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
import Responsive from 'react-responsive';

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

    const nameImg={
      width:"auto",
      height:"30vh",
    }

    const env={
      width:"100%",
      height:"auto",


    }
    const mainCont={
      width:"80%",
      height:"50vh",
      background:"#999",
      marginLeft:"10%",
      marginTop:"10%",

    }

    const mainContm={
      width:"100%",
      height:"50vh",
      background:"#999",
      marginTop:"13%",


    }

    const seperate={
      height:"100%",
      width:"40%",
      background:"none",
      display:"flex",
      flexDirection:"column",



    }

    const padd={
      marginTop:"80px",
      marginLeft:"15px",
      lineHeight:".8",
    }
    const padd2={
      marginBottom:"15px",
      marginLeft:"15px",
      lineHeight:".8",
    }

    const span1={
      fontSize:"4.3em",
      fontWeight:"bold",

    }
    const span2={
      fontSize:"7em",
      letterSpacing:".27em",
    }
    const span3={
      fontSize:"7em",
      fontWeight:"bold",
      letterSpacing:".19em",
    }

    const paddM={
      marginTop:"60px",
      marginLeft:"10px",
      lineHeight:".9",
    }
    const padd2M={
      marginTop:"70px",
      marginLeft:"7px",
      lineHeight:".1",
    }

    const span1M={
      fontSize:"1.7em",
      fontWeight:"bold",
    }
    const span2M={
      fontSize:"2em",
      letterSpacing:".4em",
    }
    const span3M={
      fontSize:"3.1em",
      fontWeight:"bold",
      letterSpacing:".09em",
    }

    const seperateM={
      height:"100%",
      width:"70%",
      background:"none",
      display:"flex",
      flexDirection:"column"


    }

    const small={
      fontSize:"2em",
      textIndent:"50px"
    }

    const join={
      width:"100%",
      height:"15%",
      textAlign:"center",
    }
    const joinM={
      width:"100%",
      height:"10%",
      textAlign:"center",
    }
    const smallM={
      fontSize:"1em",

    }
    return (
      <div>

        <Responsive minDeviceWidth={660}>


          <div atyle={env}>

      <Link to={"/aboutsrl"}>
          <div style={mainCont}>

            <div style={seperate}>

              <div style={padd}>
                <span style={span1}>PROGRAMMERS</span> <span style={span2}>OF    THE</span> <span style={span3}>FUTURE</span>
              </div>

              <div style={padd2}>
                <p style={small}>Teaching | Thinking | Building </p>
              </div>

            </div>

          </div>
      </Link>

        <div style={join}>
          <p style={small}>Join the Sumo Robot League </p>
          <FlatButton  style={bttn} onTouchTap={()=> this.handleNav("/signin")}>sign in</FlatButton>
          <FlatButton  style={bttn} onTouchTap={()=> this.handleNav("/signup")}>JOIN</FlatButton>

        </div>

        </div>

        </Responsive>


        <Responsive maxDeviceWidth={659}>

        <Link to={"/aboutsrl"}>
            <div style={mainContm}>
              <div style={seperateM}>

                <div style={paddM}>
                  <span style={span1M}>PROGRAMMERS</span> <span style={span2M}>OF    THE</span> <span style={span3M}>FUTURE</span>
                </div>

                <div style={padd2M}>
                  <p>Teaching | Thinking | Building </p>
                </div>

              </div>
            </div>
        </Link>

          <div style={joinM}>
            <p style={smallM}>Join the Sumo Robot League </p>
            <FlatButton  style={bttn} onTouchTap={()=> this.handleNav("/signin")}>sign in</FlatButton>
            <FlatButton  style={bttn} onTouchTap={()=> this.handleNav("/signup")}>JOIN</FlatButton>
          </div>

        </Responsive>

      </div>
    );
  }
}

HomeContent.contextTypes = {
  router: React.PropTypes.object
}


export default HomeContent;
