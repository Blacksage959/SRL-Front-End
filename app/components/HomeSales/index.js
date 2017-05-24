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
      height:"40vh",
      width:"100%",
      borderTop:"1px solid black",
      marginTop:"5%",

    }
    const bigBold={
      fontSize:"5em",
      marginTop:"10%",
      marginLeft:"30%",
      zDepth:"99999"


    }
    const imgConstraint={
      height:"80%",
      width:"30%",
    position:"relative",
    background:"#888",
    left:"50%",
    bottom:"70%",

    }
    const bigBoldm={
      fontSize:"2.5em",
      marginTop:"25%",
      marginLeft:"10%",
      zDepth:"99999"


    }
    const imgConstraintm={
      height:"60%",
      width:"60%",
    position:"relative",
    background:"#888",
    left:"30%",
    bottom:"50%",

    }
    return (
      <div>

        <Responsive minDeviceWidth={660}>

        <div>

          <Link to={"/allproducts"}>
            <div style={ContB}>

              <h2 style={bigBold}>PRODUCTS +</h2>
              <div style={imgConstraint}></div>
            </div>
          </Link>

        <Link to={"/education"}>
          <div style={ContB}>

            <h2 style={bigBold}>EDUCATION +</h2>
            <div style={imgConstraint}></div>

          </div>
        </Link>

        </div>
        </Responsive>




        <Responsive maxDeviceWidth={659}>

          <div>

            <Link to={"/allproducts"}>
              <div style={ContB}>

                <h2 style={bigBoldm}>PRODUCTS +</h2>
                <div style={imgConstraintm}></div>
              </div>
            </Link>

          <Link to={"/education"}>
            <div style={ContB}>

              <h2 style={bigBoldm}>EDUCATION +</h2>
              <div style={imgConstraintm}></div>

            </div>
          </Link>

          </div>

          </Responsive>





      </div>
    );
  }
}

export default HomeSales;
