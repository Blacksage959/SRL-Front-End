/*
 *
 * Orders
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import FlatButton from 'material-ui/FlatButton';
import {Link} from "react-router";
import EditIcon from 'material-ui/svg-icons/image/edit';
import AddIcon from 'material-ui/svg-icons/content/add';
import DeleteIcon from 'material-ui/svg-icons/action/delete';

export default class Orders extends React.PureComponent {

  constructor(props){
    super(props);
    this.state ={
      orders:[],
      userID:"",
      productID:"",
      amount:"",
      totalPrice:"",
      comment:"",
      token:sessionStorage.getItem("token"),
    }
  }


  componentWillMount(){
    fetch("http://localhost:8000/api/getOrders?token=" + this.state.token, {
      header:{
        "Authorization":"Bearer " + this.state.token
      }
    })
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      this.setState({
        orders:json
      })
    }.bind(this))

  }

  handleNav = (location) => {
    this.context.router.push(location);
  }

  render() {
    const env={
      height:"100%",
      width:"100%",
    }
    const header={
      width:"100%",
      height:"15vh",
      backgroundColor:"#999",

    }
    const logo={
      height:"80%",
      fontFamily:"Amatic SC",

    }
    const logoBttn={
      height:"auto",
      width:"auto",
      fontFamily:"Lato",
      letterSpacing:".8em",
      fontSize:"1.5em",
      backgroundColor:"#555",
      paddingLeft:"5px"
    }
    const bttn={
      height:"auto",
      width:"auto",
      fontFamily:"Lato",
      letterSpacing:".6em",
      fontSize:"1em",
      backgroundColor:"#555",
      paddingLeft:"5px",
      top:"-20px",
      marginLeft:"5px",

    }
    const find={
      height:"20%"
    }
    return (
      <div>
        <Helmet title="Orders" meta={[ { name: 'description', content: 'Description of Orders' }]}/>

        <div style={env}>
          <div style={header}>

            <div style={logo}>
                <FlatButton style={logoBttn} onTouchTap={()=> this.handleNav("/admindash")}> ORDERS- </FlatButton>
            </div>

            <div style={find}>
              <FlatButton style={bttn} onTouchTap={()=> this.handleNav("/forder")}> FIND+</FlatButton>
            </div>

          </div>

          <div style={env}>
            {this.state.orders.map((order, index) => (
              <div>
                <p>
                  {order.id}{order.totalPrice}
                  <Link to={`/sorder/${order.id}`}><AddIcon color="#99999" hoverColor="rgba(20,192,11,1)"/></Link>
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    );
  }
}

Orders.contextTypes = {
  router: React.PropTypes.object
}
