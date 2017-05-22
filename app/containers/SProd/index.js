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
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

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



  deleteProduct = () => {
    var _this=this;
    fetch("http://localhost:8000/api/deleteProduct/" + this.props.params.id + "?token=" + this.state.token,{
      method:"post"
    })
    .then(function(response){
      return response.json();
    })

    .then(function(json){
       alert("Product deleted.");
       _this.handleClose();
     })
  }



  state={
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});

  };



  handleNav = (location) => {
    this.context.router.push(location);
  }


  render() {

    const actions=[
      <FlatButton label="Cancel" primary={true} onTouchTap={this.handleClose}/>,
      <FlatButton label="Delete" primary={true} onTouchTap={()=>this.deleteProduct()}/>,
    ];

    const env={
      height:"100vh",
      width:"100%",

    }

    const header={
      width:"100%",
      height:"15vh",
      backgroundColor:"#999",
    }
    const logo={
      height:"80%"
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
    const newFind={
      height:"20%",
    }

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

        <div style={env}>
            <div style={header}>
              <div style={logo}>
                <FlatButton style={logoBttn} onTouchTap={()=> this.handleNav("/products")}> SHOW PRODUCT- </FlatButton>
              </div>

              <div style={newFind}>
                <FlatButton  style={bttn} onTouchTap={this.handleOpen}><EditIcon/>Edit</FlatButton >
                <FlatButton style={bttn} onTouchTap={this.handleOpen}><DeleteIcon/>Delete</FlatButton >
              </div>

      <p style={p}>Product ID:{this.state.product.id}</p><br/>
      <p style={p}>Name:{this.state.product.name}</p><br/>
      <p style={p}>Images:{this.state.product.images}</p><br/>
      <p style={p}>Price:{this.state.product.price}</p><br/>
      <p style={p}>Description:{this.state.product.description}</p><br/>
      <p style={p}>Category ID:{this.state.product.categoryID}</p><br/>
      <p style={p}>Availability:{this.state.product.availability}</p><br/>

        <Dialog actions={actions} modal={false} open={this.state.open} onRequestClose={this.handleClose}>
          Delete this Product?
        </Dialog>

      </div>
      </div>
      </div>
    );
  }
}

SProd.contextTypes = {
  router: React.PropTypes.object
}
