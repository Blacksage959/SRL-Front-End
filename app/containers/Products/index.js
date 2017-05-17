/*
 *
 * Products
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import FlatButton from 'material-ui/FlatButton';
import {Link} from "react-router";

export default class Products extends React.PureComponent {

  constructor(props){
    super(props);
    this.state ={
      products:[],
      name:"",
      images:"",
      price:"",
      description:"",
      categoryID:"",
      availability:"",
      token:sessionStorage.getItem("token"),
    }
  }


  componentWillMount(){
    fetch("http://localhost:8000/api/getProducts?token=" + this.state.token, {
      header:{
        "Authorization":"Bearer " + this.state.token
      }
    })
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      this.setState({
        products:json
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
      height:"80%"
    }
    const logoBttn={
      height:"auto",
      width:"auto",
      fontFamily:"Lato",
      letterSpacing:".6em",
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

    const newFind={
      height:"20%",

    }
    return (
      <div>
        <Helmet title="Products" meta={[ { name: 'description', content: 'Description of Products' }]}/>

        <div style={env}>
          <div style={header}>
            <div style={logo}>
              <FlatButton style={logoBttn} onTouchTap={()=> this.handleNav("/admindash")}> PRODUCTS- </FlatButton>
            </div>

            <div style={newFind}>
              <FlatButton style={bttn} onTouchTap={()=> this.handleNav("/nprod")}> NEW+</FlatButton>
              <FlatButton style={bttn} onTouchTap={()=> this.handleNav("/fprod")}> FIND+</FlatButton>
            </div>

          </div>

          <div style={env}>
            {this.state.products.map((product, index) => (
              <div>
                <p>{product.name}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    );
  }
}
Products.contextTypes = {
  router: React.PropTypes.object
}
