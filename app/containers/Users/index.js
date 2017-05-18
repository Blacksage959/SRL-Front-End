/*
 *
 * Users
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import FlatButton from 'material-ui/FlatButton';
import {Link} from "react-router";
import EditIcon from 'material-ui/svg-icons/image/edit';
import AddIcon from 'material-ui/svg-icons/content/add';
import DeleteIcon from 'material-ui/svg-icons/action/delete';

export default class Users extends React.PureComponent {

  constructor(props){
    super(props);
    this.state ={
      users:[],
      name:"",
      email:"",
      password:"",
      roleID:"",
      token:sessionStorage.getItem("token"),
    }
  }



  componentWillMount(){
    fetch("http://localhost:8000/api/getUsers?token=" + this.state.token, {
      header:{
        "Authorization":"Bearer " + this.state.token
      }
    })
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      this.setState({
        users:json
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
      height:"80%",

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
    const find={
      height:"20%",

    }

    return (
      <div>
        <Helmet title="Users" meta={[ { name: 'description', content: 'Description of Users' }]}/>

      <div style={env}>
        <div style={header}>
          <div style={logo}>
            <FlatButton style={logoBttn} onTouchTap={()=> this.handleNav("/admindash")}> USERS- </FlatButton>
          </div>

          <div style={find}>
            <FlatButton style={bttn} onTouchTap={()=> this.handleNav("/fuser")}> FIND+</FlatButton>
          </div>

          <div style={env}>
            {this.state.users.map((user, index) => (
              <div>
                <p>
                  {user.id}{user.name}
                  <Link to={`/suser/${user.id}`}><AddIcon color="#99999" hoverColor="rgba(20,192,11,1)"/></Link>
                  <EditIcon color="#99999" hoverColor="rgba(20,192,11,1)" onTouchTap={()=> this.handleNav("/")}/>
                  <DeleteIcon color="#99999" hoverColor="rgba(20,192,11,1)" onTouchTap={()=> this.handleNav("/")}/>
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      </div>
    );
  }
}

Users.contextTypes = {
  router: React.PropTypes.object
}
