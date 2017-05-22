/*
 *
 * Sorder
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import FlatButton from 'material-ui/FlatButton';
import {Link} from "react-router";
import EditIcon from 'material-ui/svg-icons/image/edit';
import DeleteIcon from 'material-ui/svg-icons/action/delete';

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

  handleNav = (location) => {
    this.context.router.push(location);
  }

  render() {

    const logoBttn={
      height:"auto",
      width:"auto",
      fontFamily:"Lato",
      letterSpacing:".6em",
      fontSize:"1em",
    backgroundColor:"#555",
    paddingLeft:"5px"
    }

    const p={
      fontFamily:"Lato",

      fontSize:"1em",

    paddingLeft:"5px"
    }
    return (
      <div>
        <Helmet title="SOrder" meta={[ { name: 'description', content: 'Description of SOrder' }]}/>

        <p><FlatButton style={logoBttn} onTouchTap={()=> this.handleNav("/orders")}> SHOW ORDER- </FlatButton></p>
        <p style={p}>Order ID:{this.state.order.id}</p><br/>
        <p style={p}>User ID:{this.state.order.userID}</p><br/>
        <p style={p}>Product ID:{this.state.order.productID}</p><br/>
        <p style={p}>Amount:{this.state.order.amount}</p><br/>
        <p style={p}>Total Price:{this.state.order.totalPrice}</p><br/>
        <p style={p}>Comment:{this.state.order.comment}</p><br/>


      </div>
    );
  }
}

SOrder.contextTypes = {
  router: React.PropTypes.object
}
