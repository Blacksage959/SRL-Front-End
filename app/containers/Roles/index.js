/*
 *
 * Roles
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import FlatButton from 'material-ui/FlatButton';
import {Link} from "react-router";

export default class Roles extends React.PureComponent {


  componentWillMount(){
    fetch("http://localhost:3000/api/getRoles")
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      this.setState({
        posts:json
      })
    }.bind(this))

  }

  handleNav = (location) => {
    this.context.router.push(location);
  }

  render() {
    const env={
      height:"100%",
      width:"100%",
    }
    const header={
      width:"100%",
      height:"15vh",
      backgroundColor:"#999",
    }
    const logo={
      height:"80%"
    }

    const logoBttn={
      height:"auto",
      width:"auto",
      fontFamily:"Lato",
      letterSpacing:".8em",
      fontSize:"1.5em",
      backgroundColor:"#555",
      paddingLeft:"5px"
    }
    const bttn={
      height:"auto",
      width:"auto",
      fontFamily:"Lato",
      letterSpacing:".6em",
      fontSize:"1em",
      backgroundColor:"#555",
      paddingLeft:"5px",
      top:"-20px",
      marginLeft:"5px",
    }
    const newFind={
      height:"20%"
    }

    return (
      <div>
        <Helmet title="Roles" meta={[ { name: 'description', content: 'Description of Roles' }]}/>

        <div style={env}>
          <div style={header}>
            <div style={logo}>
              <FlatButton style={logoBttn} onTouchTap={()=> this.handleNav("/admindash")}> ROLES- </FlatButton>
            </div>

            <div style={newFind}>
              <FlatButton style={bttn} onTouchTap={()=> this.handleNav("/nrole")}> NEW+</FlatButton>
              <FlatButton style={bttn} onTouchTap={()=> this.handleNav("/frole")}> FIND+</FlatButton>
            </div>

          </div>
        </div>

      </div>
    );
  }
}

Roles.contextTypes = {
  router: React.PropTypes.object
}
