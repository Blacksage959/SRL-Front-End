/*
 *
 * SUser
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

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


  render() {
    const row={
      height:"auto",
      width:"auto",


    }
    return (
      <div>
        <Helmet title="SUser" meta={[ { name: 'description', content: 'Description of SUser' }]}/>


        {this.state.user.id}<br/>
        {this.state.user.name}<br/>
        {this.state.user.email}<br/>
        {this.state.user.roleID}<br/>


      </div>
    );
  }
}
