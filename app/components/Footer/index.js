/**
*
* Footer
*
*/

import React from 'react';

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

    }

    return (
      <div style={bttm}>

        <p>Sumo Robot League<br/>540 Telfair Street Augusta GA, 30901<br/>HEYA@SUMOROBOTLEAGUE.COM</p>

      </div>
    );
  }
}

export default Footer;
