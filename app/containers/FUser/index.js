/*
 *
 * FUser
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import FlatButton from 'material-ui/FlatButton';
import {Link} from "react-router";


export default class FUser extends React.PureComponent {

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
    const row={
      display:"flex",
      flexDirection:"column",
      padding:"20px",
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


    return (
      <div>
        <Helmet title="FUser" meta={[ { name: 'description', content: 'Description of FUser' }]}/>

          <div style={env}>
            <div style={header}>

              <FlatButton style={logoBttn} onTouchTap={()=> this.handleNav("/users")}> FIND USER - </FlatButton>

            </div>

            <div style={row}>
            <input style={input} type="text" placeholder="Users ID"/>
            <input style={input} type="text" placeholder="UserName"/>
            <input style={input} type="text" placeholder="Email"/>
            <input style={input} type="text" placeholder="Role ID"/>

            <input style={input} placeholder={find} type="submit"/>
            </div>

          </div>
      </div>
    );
  }
}
FUser.contextTypes = {
  router: React.PropTypes.object
}
