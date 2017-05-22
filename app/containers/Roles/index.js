/*
 *
 * Roles
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import FlatButton from 'material-ui/FlatButton';
import {Link} from "react-router";
import EditIcon from 'material-ui/svg-icons/image/edit';
import AddIcon from 'material-ui/svg-icons/content/add';
import DeleteIcon from 'material-ui/svg-icons/action/delete';

export default class Roles extends React.PureComponent {


constructor(props){
  super(props);
  this.state ={
    roles:[],
    name:"",
    token:sessionStorage.getItem("token"),
  }
}

  componentWillMount(){
    fetch("http://localhost:8000/api/getRoles?token=" + this.state.token, {
      header:{
        "Authorization":"Bearer " + this.state.token
      }
    })
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      this.setState({
        roles:json
      })
  }.bind(this))

}

  handleNav = (location) => {
    this.context.router.push(location);
  }

  render() {
    const env={
      height:"100vh",
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

          <div style={env}>
            {this.state.roles.map((role, index) => (
              <div>
                <p>
                  {role.id}{role.name}
                  <Link to={`/srole/${role.id}`}><AddIcon/></Link>

                </p>
              </div>
            ))}
          </div>


        </div>

      </div>
    );
  }
}

Roles.contextTypes = {
  router: React.PropTypes.object
}
