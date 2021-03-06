/*
 *
 * NRole
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import FlatButton from 'material-ui/FlatButton';
import {Link} from "react-router";

export default class NRole extends React.PureComponent {


  constructor(props){
  super(props);
  this.state ={
    name:"",
    token:sessionStorage.getItem("token"),
   }
  }

  handleName = (event) => {
    this.setState({
      name:event.target.value
    })
  }


  storeRole = () => {
    var data = new FormData();
    data.append("name",this.state.name);


    fetch("http://localhost:8000/api/storeRole" + "?token=" + this.state.token ,{
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
      fontSize:"1.5em",
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

    const row={
      display:"flex",
      flexDirection:"column",
      padding:"20px",
    }

    return (
      <div>
        <Helmet title="NRole" meta={[ { name: 'description', content: 'Description of NRole' }]}/>

        <div style={env}>
            <div style={header}>

          <FlatButton style={logoBttn} onTouchTap={()=> this.handleNav("/roles")}> NEW ROLE - </FlatButton>

        </div>
        </div>

        <div style={row}>
          <input style={input} onChange={this.handleName} type="text" placeholder="Role Name"/>
          <input style={input} onTouchTap={this.storeRole} type="submit"/>
        </div>

      </div>
    );
  }
}

NRole.contextTypes = {
  router: React.PropTypes.object
}
