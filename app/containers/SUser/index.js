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
    user:""
   }
  }

componentWillMount(){

  fetch("http://localhost:8000/api/showUser/" + this.props.params.id)
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
    return (
      <div>
        <Helmet title="SUser" meta={[ { name: 'description', content: 'Description of SUser' }]}/>
        {this.state.user.username}

      </div>
    );
  }
}
