/*
 *
 * Sorder
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class SOrder extends React.PureComponent {

  constructor(props){
  super(props);
  this.state ={
    order:""
   }
  }

componentWillMount(){

  fetch("http://localhost:8000/api/showOrder/" + this.props.params.id)
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      this.setState({
        order:json
      })
    }.bind(this))
  }


  render() {
    return (
      <div>
        <Helmet title="SOrder" meta={[ { name: 'description', content: 'Description of SOrder' }]}/>

        {this.state.order.id}
        {this.state.order.userName}
        {this.state.order.totalPrice}
      </div>
    );
  }
}
