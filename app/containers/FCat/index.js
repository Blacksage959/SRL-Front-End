/*
 *
 * FCat
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import FlatButton from 'material-ui/FlatButton';
import {Link} from "react-router";

export default class FCat extends React.PureComponent {

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
    const find={
      height:"20%"
    }


    return (
      <div>
        <Helmet title="FCat" meta={[ { name: 'description', content: 'Description of FCat' }]}/>

          <div style={env}>
            <div style={header}>

              <FlatButton style={logoBttn} onTouchTap={()=> this.handleNav("/categories")}> FIND CATEGORY - </FlatButton>

            </div>
          </div>

      </div>
    );
  }
}
FCat.contextTypes = {
  router: React.PropTypes.object
}
