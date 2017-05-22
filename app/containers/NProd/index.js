/*
 *
 * NProd
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import FlatButton from 'material-ui/FlatButton';
import {Link} from "react-router";

export default class NProd extends React.PureComponent {

  constructor(props){
  super(props);
  this.state ={
    name:"",
    images:"",
    price:"",
    description:"",
    categoryID:"",
    availability:"",
    token:sessionStorage.getItem("token"),
    }
  }


  handleName = (event) => {
    this.setState({
      name:event.target.value
    })
  }

  handleImages = (event) => {
    event.preventDefault();

    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend= () => {
      this.setState({
        images:file,
        preview: reader.result
      })
    }

    reader.readAsDataURL(file);
  }

  handlePrice = (event) => {
    this.setState({
      price:event.target.value
    })
  }

  handleDescription = (event) => {
    this.setState({
      description:event.target.value
    })
  }

  handleCategoryID = (event) => {
    this.setState({
      categoryID:event.target.value
    })
  }

  handleAvailability = (event) => {
    this.setState({
      availability:event.target.value
    })
  }


  storeProduct = () => {
    var data = new FormData();
    data.append("name",this.state.name);
    data.append("images",this.state.images);
    data.append("price",this.state.price);
    data.append("description",this.state.description);
    data.append("categoryID",this.state.categoryID);
    data.append("availability",this.state.availability);


    fetch("http://localhost:8000/api/storeProduct" + "?token=" + this.state.token,{
      method:"post",
      body:data

    })
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      if(json.success) {
        alert(json.success);

      }
    else if(json.error) {
      alert(json.error);
     }
    })
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
      letterSpacing:".4em",
      fontSize:"1.2em",
      backgroundColor:"#555",
      paddingLeft:"5px"

    }
    const find={
      height:"20%"
    }

    const input={
      height:"auto",
      width:"auto",
      backgroundColor:"rgba(220,255,220,1)",
      marginBottom:"3%",
      marginTop:"3%",
      border:"1px solid green",
      adding:"10",
      overflow:"scroll",
    }

    const imgCons={
      height:"125px",
      width:"200px",
      margin:"auto",
    }
    const row={
      display:"flex",
      flexDirection:"column",
      padding:"20px",
    }

    return (
      <div>
        <Helmet title="NProd" meta={[ { name: 'description', content: 'Description of NProd' }]}/>

          <div style={env}>
            <div style={header}>

              <FlatButton style={logoBttn} onTouchTap={()=> this.handleNav("/products")}> NEW PRODUCT - </FlatButton>

            </div>
          </div>

          <div style={row}>

            <input style={input} onChange={this.handleName} type="text" placeholder="Product Name"/>
            <input style={input} onChange={this.handleCategoryID} type="text" placeholder="CategoryID"/>
            <input style={input} onChange={this.handlePrice} type="text" placeholder="Price"/>
            <input style={input} onChange={this.handleDescription} type="text" placeholder="Description"/>
            <input style={input} onChange={this.handleAvailability} type="text" placeholder="Availability"/>
            <input style={input} onChange={this.handleImages} type="file"/>
            <img style={imgCons} src={this.state.preview}/>
            <input style={input} onTouchTap={this.storeProduct} type="submit"/>

          </div>

      </div>
    );
  }
}
NProd.contextTypes = {
  router: React.PropTypes.object
}
