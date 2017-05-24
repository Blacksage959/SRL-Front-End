/**
*
* Footer
*
*/

import React from 'react';
import Responsive from 'react-responsive';
import {Link} from "react-router";

class Footer extends React.PureComponent {

  render() {
    const bttm={
      width:"100%",
      height:"17vh",
      lineHeight:"2",
      fontSize:".9em",
      textAlign:"center",
      backgroundColor:"rgba(250,50,50,.9)",
      padding:".5%",
      color:"white",
      textDecoration:"none",
      marginTop:"15px",

    }
    const bttmB={
      width:"100%",
      height:"17vh",
      lineHeight:"2",
      fontSize:"2em",
      textAlign:"center",
      backgroundColor:"rgba(250,50,50,.9)",
      padding:".5%",
      color:"white",
      textDecoration:"none",
      marginTop:"120px",

    }
    return (
      <div>
        <Responsive minDeviceWidth={660}>

          <Link to={"/contact"}><div style={bttmB}>

            <p>Sumo Robot League, 540 Telfair Street Augusta GA, 30901,HEYA@SUMOROBOTLEAGUE.COM</p>

          </div></Link>
        </Responsive>


      <Responsive maxDeviceWidth={659}>
      <Link to={"/contact"}><div style={bttm}>

        <p>Sumo Robot League<br/>540 Telfair Street Augusta GA, 30901<br/>HEYA@SUMOROBOTLEAGUE.COM</p>

      </div></Link>

      </Responsive>
      </div>
    );
  }
}

export default Footer;
