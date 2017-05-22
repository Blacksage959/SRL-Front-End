/*
 *
 * UpProd
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

export default class UpProd extends React.PureComponent {

  constructor(props){
  super(props);
  this.state ={
    product:"",
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

componentWillMount(){

  fetch("http://localhost:8000/api/showProduct/" + this.props.params.id + "?token=" + this.state.token)
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      this.setState({
        product:json
      })
    }.bind(this))
  }



  updateProduct = () => {
    var data = new FormData();
    data.append("name",this.state.name);
    data.append("images",this.state.images);
    data.append("price",this.state.price);
    data.append("description",this.state.description);
    data.append("categoryID",this.state.categoryID);
    data.append("availability",this.state.availability);
    fetch("http://localhost:8000/api/updateProduct/" + this.props.params.id + "?token=" + this.state.token ,{
      method:"post",
      body:data

    })
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      if(json.success) {
        alert("Product updated.");

      }
    else if(json.error) {
      alert(json.error);
     }
    })
  }

render() {

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
    paddingLeft:"5px",
    }


    const p={
      fontFamily:"Lato",

      fontSize:"1em",

    paddingLeft:"5px",
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

    const row={
      display:"flex",
      flexDirection:"column",
      padding:"20px",
    }
    const imgCons={
      height:"125px",
      width:"200px",
      margin:"auto",
    }

    return (
      <div>
        <Helmet title="UpProd" meta={[ { name: 'description', content: 'Description of UpProd' }]}/>

          <div style={env}>
            <div style={header}>
              <div style={logo}>
                <FlatButton style={logoBttn}><Link to={`/sprod/${this.state.product.id}`}>EDIT PRODUCT-</Link ></FlatButton>
              </div>


            <p style={p}>RoleID:{this.state.product.id}</p><br/>
            <p style={p}>Name:{this.state.product.name}</p><br/>
            <p style={p}>Images:{this.state.product.images}</p><br/>
            <p style={p}>Price:{this.state.product.price}</p><br/>
            <p style={p}>Description:{this.state.product.description}</p><br/>
            <p style={p}>Category ID:{this.state.product.categoryID}</p><br/>
            <p style={p}>Availability:{this.state.product.availability}</p><br/>


              <div style={row}>
                <input style={input} onChange={this.handleName} type="text" placeholder="Product Name"/>
                <input style={input} onChange={this.handleCategoryID} type="text" placeholder="CategoryID"/>
                <input style={input} onChange={this.handlePrice} type="text" placeholder="Price"/>
                <input style={input} onChange={this.handleDescription} type="text" placeholder="Description"/>
                <input style={input} onChange={this.handleAvailability} type="text" placeholder="{this.state.product.availability}"/>
                <input style={input} onChange={this.handleImages} type="file"/>
                <img style={imgCons} src={this.state.preview}/>
                <input style={input} onTouchTap={this.updateProduct} type="submit"/>
              </div>

      </div>
      </div>
      </div>
    );
  }
}
