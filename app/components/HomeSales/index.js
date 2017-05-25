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
import Responsive from 'react-responsive';

class HomeSales extends React.PureComponent {
  render() {
    const ContB={
      height:"50vh",
      width:"100%",
      borderTop:"1px solid black",
      marginTop:"5%",
      overflow:"hidden",
}

const ContBd={
  height:"80vh",
  width:"100%",
  borderTop:"1px solid black",
  marginTop:"5%",
  overflow:"hidden",
}

    const ContB2={
      height:"auto",
      width:"100%",
      borderTop:"1px solid black",
      textAlign:"center",
      padding:"5%",

}

    const ContB22={
      height:"auto",
      maxHeigh:"40vh",
      width:"100%",
      borderTop:"1px solid black",
      textAlign:"center",
      padding:"4%",
}

    const bigQ={
      fontSize:"10em"
    }

    const bigQ2={
      fontSize:"20em",
      marginTop:"-440px"
    }
    const bigBold={
      fontSize:"10em",
      marginTop:"10%",
      marginLeft:"30%",

      zIndex:"99998",
      color:"white",
      position:"absolute",
      top:"1000px",
        textShadow:"3px 3px 7px black",
      left:"0"
        }
        const bigBold2={
          fontSize:"2.5em",
          zIndex:"99998",
          color:"white",
          position:"absolute",
          top:"500px",
          textShadow:"1px 1px 3px black",
          left:"20px"
            }

  const imgConstraint={
    height:"600%",
    width:"100%",
    position:"relative",
    backgroundImage:"url:https://static1.squarespace.com/static/55f05957e4b049cf1b1396b0/t/56216f8be4b01226f10a8a49/1445031840407/LCPWSSumoRobot-48.jpg?format=1000w",
    right:"0px",
    bottom:"1200px",


}
    const bigBoldm={
      fontSize:"2.5em",
      marginTop:"25%",
      marginLeft:"10%",
}
    const imgConstraintm={
      height:"300%",
      width:"150%",
      position:"relative",
      right:"100px",
      bottom:"100px",
      backgroundImage:"url:https://static1.squarespace.com/static/55f05957e4b049cf1b1396b0/t/56216f8be4b01226f10a8a49/1445031840407/LCPWSSumoRobot-48.jpg?format=1000w",

}

    const up={
      marginTop:"-120px"
    }

    const up2={
      marginTop:"-200px",
      fontSize:"2em"
    }

    const quote={
      fontSize:"2.5em",
      margin:"5%",
    }
    const quoteF={
      fontSize:"2.5em",
    }
    return (
      <div>

        <Responsive minDeviceWidth={660}>

        <div>

          <Link to={"/allproducts"}>
            <div style={ContBd}>

                <img style={imgConstraint} src="https://static1.squarespace.com/static/55f05957e4b049cf1b1396b0/t/56216f8be4b01226f10a8a49/1445031840407/LCPWSSumoRobot-48.jpg?format=1000w"/>

                <p style={bigBold}>
                  PRODUCTS +
                </p>

            </div>
          </Link>

          <div style={ContB22}>
            <span style={bigQ2}>“</span>
            <p style={up2}>We all recognize that preparing our students for the demands of this 21st century world requires us to engage students in learning that is collaborative, problem-based, and integrates technology. However, that’s much easier said than done. Sumo Robot League has made it easier for us to adapt and adopt by providing training, curriculum, materials, and support.</p>
            <p style={quoteF}>— Ned Murray, Headmaster-Episcopal Day School</p>

          </div>

        </div>

        </Responsive>




        <Responsive maxDeviceWidth={659}>

          <div>

            <Link to={"/allproducts"}>
              <div style={ContB}>

                <p style={bigBold2}>
                  PRODUCTS +
                </p>

                <img style={imgConstraintm} src="https://static1.squarespace.com/static/55f05957e4b049cf1b1396b0/t/56216f8be4b01226f10a8a49/1445031840407/LCPWSSumoRobot-48.jpg?format=1000w"/>
              </div>
            </Link>

            <div style={ContB2}>
              <span style={bigQ}>“</span>
              <p style={up}>We all recognize that preparing our students for the demands of this 21st century world requires us to engage students in learning that is collaborative, problem-based, and integrates technology. However, that’s much easier said than done. Sumo Robot League has made it easier for us to adapt and adopt by providing training, curriculum, materials, and support.</p>
              <p>— Ned Murray, Headmaster-Episcopal Day School</p>

            </div>

          </div>

          </Responsive>





      </div>
    );
  }
}

export default HomeSales;
