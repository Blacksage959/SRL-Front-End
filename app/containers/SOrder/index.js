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
    order:"",
    token:sessionStorage.getItem("token"),
   }
  }

componentWillMount(){

  fetch("http://localhost:8000/api/showOrder/" + this.props.params.id + "?token=" + this.state.token)
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

        {this.state.order.id}<br/>
        {this.state.order.userID}<br/>
        {this.state.order.productID}<br/>
        {this.state.order.amount}<br/>
        {this.state.order.totalPrice}<br/>
        {this.state.order.comment}<br/>


      </div>
    );
  }
}
