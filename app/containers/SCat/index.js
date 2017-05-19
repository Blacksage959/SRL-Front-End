

import React from 'react';
import Helmet from 'react-helmet';

export default class SCat extends React.PureComponent {

  constructor(props){
  super(props);
  this.state ={
    category:"",
    token:sessionStorage.getItem("token"),
   }
  }

componentWillMount(){

  fetch("http://localhost:8000/api/showCategory/" + this.props.params.id + "?token=" + this.state.token)
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      this.setState({
        category:json
      })
    }.bind(this))
  }



  render() {
    return (
      <div>
        <Helmet title="SCat" meta={[ { name: 'description', content: 'Description of SCat' }]}/>
        {this.state.category.id}<br/>
        {this.state.category.name}<br/>

      </div>
    );
  }
}
