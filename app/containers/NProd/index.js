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

    image:"",
    preview:"",

   }
  }

  handleImage = (event) => {
    event.preventDefault();

    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend= () => {
      this.setState({
        image:file,
        preview: reader.result
      })
    }

    reader.readAsDataURL(file);
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

            <input style={input} type="text" placeholder="Product Name"/>
            <input style={input} type="text" placeholder="CategoryID"/>
            <input style={input} type="text" placeholder="Price"/>
            <input style={input} type="text" placeholder="Description"/>
            <input style={input} onChange={this.handleImage} type="file"/>
            <img style={imgCons} src={this.state.preview}/>
            <input style={input} type="submit"/>

          </div>

      </div>
    );
  }
}
NProd.contextTypes = {
  router: React.PropTypes.object
}
