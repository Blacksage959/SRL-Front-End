/*
 *
 * SProd
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class SProd extends React.PureComponent {



  constructor(props){
  super(props);
  this.state ={
    product:""
   }
  }

componentWillMount(){

  fetch("http://localhost:8000/api/showProduct/" + this.props.params.id)
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      this.setState({
        product:json
      })
    }.bind(this))
  }




  render() {
    return (
      <div>
        <Helmet title="SProd" meta={[ { name: 'description', content: 'Description of SProd' }]}/>
      {this.state.product.id}<br/>
      {this.state.product.name}<br/>
      {this.state.product.images}<br/>
      {this.state.product.price}<br/>
      {this.state.product.description}<br/>
      {this.state.product.categoryID}<br/>
      {this.state.product.availability}<br/>

      </div>
    );
  }
}
