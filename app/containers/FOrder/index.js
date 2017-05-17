/*
 *
 * FOrder
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import FlatButton from 'material-ui/FlatButton';
import {Link} from "react-router";


export default class FOrder extends React.PureComponent {

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
      
    }

    const row={
      display:"flex",
      flexDirection:"column",
      padding:"20px",
    }

    return (
      <div>
        <Helmet title="FOrder" meta={[ { name: 'description', content: 'Description of FOrder' }]}/>

          <div style={env}>
            <div style={header}>

              <FlatButton style={logoBttn} onTouchTap={()=> this.handleNav("/orders")}> FIND ORDER- </FlatButton>

            </div>
          </div>

          <div style={row}>
          <input style={input} type="text" placeholder="Order ID"/>
          <input style={input} type="text" placeholder="Users ID"/>
          <input style={input} type="text" placeholder="Product ID"/>


          <input style={input} type="submit"/>
          </div>

      </div>
    );
  }
}
FOrder.contextTypes = {
  router: React.PropTypes.object
}
