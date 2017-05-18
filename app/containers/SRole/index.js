/*
 *
 * Srole
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class SRole extends React.PureComponent {

  constructor(props){
  super(props);
  this.state ={
    role:""
   }
  }

componentWillMount(){

  fetch("http://localhost:8000/api/showRole/" + this.props.params.id)
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      this.setState({
        role:json
      })
    }.bind(this))
  }


  render() {
    return (
      <div>
        <Helmet title="SRole" meta={[ { name: 'description', content: 'Description of SRole' }]}/>

      {this.state.role.id}

      </div>
    );
  }
}
