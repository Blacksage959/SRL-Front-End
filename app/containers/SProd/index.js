/*
 *
 * SProd
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import FlatButton from 'material-ui/FlatButton';
import {Link} from "react-router";
import EditIcon from 'material-ui/svg-icons/image/edit';
import DeleteIcon from 'material-ui/svg-icons/action/delete';

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
        <Helmet title="SProd" meta={[ { name: 'description', content: 'Description of SProd' }]}/>

      <p><FlatButton style={logoBttn} onTouchTap={()=> this.handleNav("/products")}> SHOW PRODUCT- </FlatButton></p>
      <p style={p}>Product ID:{this.state.product.id}</p><br/>
      <p style={p}>Name:{this.state.product.name}</p><br/>
      <p style={p}>Images:{this.state.product.images}</p><br/>
      <p style={p}>Price:{this.state.product.price}</p><br/>
      <p style={p}>Description:{this.state.product.description}</p><br/>
      <p style={p}>Category ID:{this.state.product.categoryID}</p><br/>
      <p style={p}>Availability:{this.state.product.availability}</p><br/>

      </div>
    );
  }
}

SProd.contextTypes = {
  router: React.PropTypes.object
}
