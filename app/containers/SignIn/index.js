/*
 *
 * SignIn
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class SignIn extends React.PureComponent {


  constructor(props){
  super(props);
  this.state ={
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

  signin = () => {
    var data = new FormData();
    data.append("email",this.state.email);
    data.append("password",this.state.password);



    fetch("http://localhost:8000/api/signIn",{
      method:"post",
      body:data

    })
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      if(json.token !== false) {
        sessionStorage.setItem('token',json.token);
        alert("Welcome back.");
      }
    else if(json.token === false){
      alert("Invalid Credentials");
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
        <Helmet title="SignIn" meta={[ { name: 'description', content: 'Description of SignIn' }]}/>

          <div>
            <h1>sign in</h1>
            <input style={formBoxColor} onChange={this.handleEmail}  type="text" placeholder="Email"/>
            <input style={formBoxColor} onChange={this.handlePassword}  type="text" placeholder="Password"/>
            <input style={formBoxColor} onTouchTap={this.signin} type="submit"/>
          </div>

      </div>
    );
  }
}
