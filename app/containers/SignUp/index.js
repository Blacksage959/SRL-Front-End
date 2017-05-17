/*
 *
 * SignUp
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class SignUp extends React.PureComponent {

  constructor(props){
  super(props);
  this.state ={
    username:"",
    email:"",
    password:"",
   }
  }

  handleEmail = (event) => {
    this.setState({
      email:event.target.value
    })

  }

  handlePassword = (event) => {
    this.setState({
      password:event.target.value
    })

  }

  handleUsername = (event) => {
    this.setState({
      username:event.target.value
    })

  }

  signup = () => {
    var data = new FormData();
    data.append("username",this.state.username)
    data.append("email",this.state.email);
    data.append("password",this.state.password);



    fetch("http://localhost:8000/api/signUp",{
      method:"post",
      body:data

    })
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      if(json.success) {
        alert(json.success);

      }
    else if(json.error) {
      alert(json.error);
     }
    })
  }

  render() {
    const formBoxColor={

      height:"auto",
      width:"100%",
      backgroundColor:"rgba(220,255,220,1)",
      marginBottom:"3%",
      border:"1px solid green",
      maxHeight:"500px",
      overflow:"hidden",
      padding:"10px"
    }
    return (
      <div>
        <Helmet title="SignUp" meta={[ { name: 'description', content: 'Description of SignUp' }]}/>

      <div>
        <div>
          <h1>sign up</h1>
          <input style={formBoxColor} onChange={this.handleEmail}  type="text" placeholder="Email"/>
          <input style={formBoxColor} onChange={this.handleUsername}  type="text" placeholder="Username"/>
          <input style={formBoxColor} onChange={this.handlePassword}  type="text" placeholder="Password"/>
          <input style={formBoxColor} onTouchTap={this.signup} type="submit"/>
        </div>
      </div>

      </div>
    );
  }
}
