/*
 *
 * SUser
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import FlatButton from 'material-ui/FlatButton';
import {Link} from "react-router";
import EditIcon from 'material-ui/svg-icons/image/edit';
import DeleteIcon from 'material-ui/svg-icons/action/delete';

export default class SUser extends React.PureComponent {

  constructor(props){
  super(props);
  this.state ={
    user:"",
    token:sessionStorage.getItem("token"),
   }
  }

componentWillMount(){

  fetch("http://localhost:8000/api/showUser/" + this.props.params.id + "?token=" + this.state.token)
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      this.setState({
        user:json
      })
    }.bind(this))
  }

  handleNav = (location) => {
    this.context.router.push(location);
  }

  render() {
    const row={
      height:"auto",
      width:"auto",


    }

    const logoBttn={
      height:"auto",
      width:"auto",
      fontFamily:"Lato",
      letterSpacing:".6em",
      fontSize:"1em",
    backgroundColor:"#555",
    paddingLeft:"5px"
    }

    const p={
      fontFamily:"Lato",

      fontSize:"1em",

    paddingLeft:"5px"
    }
    return (
      <div>
        <Helmet title="SUser" meta={[ { name: 'description', content: 'Description of SUser' }]}/>

          <p><FlatButton style={logoBttn} onTouchTap={()=> this.handleNav("/users")}> SHOW USER- </FlatButton></p>
        <div style={p}>
        <p>User ID:  {this.state.user.id}</p><br/>
        <p>UserName:{this.state.user.name}</p><br/>
        <p>Email:{this.state.user.email}</p><br/>
        <p>Role ID:{this.state.user.roleID}</p><br/>
      </div>


      </div>
    );
  }
}

SUser.contextTypes = {
  router: React.PropTypes.object
}
