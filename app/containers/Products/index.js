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


  componentWillMount(){
    fetch("http://localhost:3000/api/getProducts")
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      this.setState({
        posts:json
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

    }
    const newFind={
      height:"20%"
    }
    return (
      <div>
        <Helmet title="Products" meta={[ { name: 'description', content: 'Description of Products' }]}/>

        <div style={env}>
          <div style={header}>
            <div style={logo}>
              <FlatButton style={logoBttn} onTouchTap={()=> this.handleNav("/admindash")}> PRODUCTS - </FlatButton>
            </div>

            <div style={newFind}>
              <FlatButton style={logoBttn} onTouchTap={()=> this.handleNav("/nprod")}> NEW +</FlatButton>
              <FlatButton style={logoBttn} onTouchTap={()=> this.handleNav("/fprod")}> FIND +</FlatButton>
            </div>

          </div>
        </div>

      </div>
    );
  }
}
Products.contextTypes = {
  router: React.PropTypes.object
}
