/*
 *
 * UpRole
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import FlatButton from 'material-ui/FlatButton';
import {Link} from "react-router";
import EditIcon from 'material-ui/svg-icons/image/edit';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

export default class UpRole extends React.PureComponent {

  constructor(props){
  super(props);
  this.state ={
    role:"",
    name:"",
    token:sessionStorage.getItem("token"),
   }
  }

componentWillMount(){

  fetch("http://localhost:8000/api/showRole/" + this.props.params.id + "?token=" + this.state.token)
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      this.setState({
        role:json
      })
    }.bind(this))
  }




  handleName = (event) => {
    this.setState({
      name:event.target.value
    })
  }


  updateRole = () => {
    var data = new FormData();
    data.append("name",this.state.name);
    fetch("http://localhost:8000/api/updateRole/" + this.props.params.id + "?token=" + this.state.token ,{
      method:"post",
      body:data

    })
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      if(json.success) {
        alert("Role updated.");

      }
    else if(json.error) {
      alert(json.error);
     }
    })
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
      height:"20%",
    }

    const logoBttn={
      height:"auto",
      width:"auto",
      fontFamily:"Lato",
      letterSpacing:".6em",
      fontSize:"1em",
    backgroundColor:"#555",
    paddingLeft:"5px",
    }


    const p={
      fontFamily:"Lato",

      fontSize:"1em",

    paddingLeft:"5px",
    }

    const input={
      height:"auto",
      width:"auto",
      backgroundColor:"rgba(220,255,220,1)",
      marginBottom:"3%",
      marginTop:"3%",
      border:"1px solid green",
      adding:"10",
      overflow:"scroll",
    }

    const row={
      display:"flex",
      flexDirection:"column",
      padding:"20px",
    }


    return (
      <div>
        <Helmet title="UpRole" meta={[ { name: 'description', content: 'Description of UpRole' }]}/>


          <div style={env}>
            <div style={header}>
              <div style={logo}>
                <FlatButton style={logoBttn}><Link to={`/srole/${this.state.role.id}`}>EDIT ROLE-</Link ></FlatButton>
              </div>


          <p style={p}>RoleID:{this.state.role.id}</p><br/>
          <p style={p}>Name:{this.state.role.name}</p><br/>

            <div style={row}>
              <input style={input} onChange={this.handleName} type="text" placeholder="New Role Name"/>
              <input style={input} onTouchTap={this.updateRole} type="submit"/>
            </div>

      </div>
      </div>
      </div>
    );
  }
}
