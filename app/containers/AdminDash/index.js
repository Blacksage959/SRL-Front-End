/*
 *
 * AdminDash
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import FlatButton from 'material-ui/FlatButton';
import {Link} from "react-router";

export default class AdminDash extends React.PureComponent {

  handleNav = (location) => {
    this.context.router.push(location);
  }

  render() {
    const env={
      height:"100%",
      width:"100%",
    }
    const admBox={
      height:"20vh",
      width:"100%",
      fontFamily:"Lato",
      fontSize:"2.5em",
      fontType:"bold",
}

    return (
      <div>

        <Helmet title="AdminDash" meta={[ { name: 'description', content: 'Description of AdminDash' }]}/>

        <div style={env}>

          <FlatButton style={admBox} backgroundColor="red" onTouchTap={()=> this.handleNav("/orders")}>ORDERS +</FlatButton>
          <FlatButton style={admBox} backgroundColor="orange" onTouchTap={()=> this.handleNav("/users")}>USERS +</FlatButton>
          <FlatButton style={admBox} backgroundColor="yellow" onTouchTap={()=> this.handleNav("/products")}>PRODUCTS +</FlatButton>
          <FlatButton style={admBox} backgroundColor="green" onTouchTap={()=> this.handleNav("/categories")}>CATEGORIES +</FlatButton>
          <FlatButton style={admBox} backgroundColor="blue" onTouchTap={()=> this.handleNav("/roles")}>ROLES +</FlatButton>

        </div>

      </div>

    );
  }
}

AdminDash.contextTypes = {
  router: React.PropTypes.object
}
