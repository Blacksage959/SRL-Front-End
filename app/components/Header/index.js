/**
*
* Header
*
*/

import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import FilterListIcon from 'material-ui/svg-icons/content/filter-list';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from "react-router";
import ShoppingCartIcon from 'material-ui/svg-icons/action/shopping-cart';
import Responsive from 'react-responsive';



class Header extends React.PureComponent {

  handleNav = (location) => {
    this.context.router.push(location);
  }


  constructor(props) {
      super(props);
      this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});

    handleClose = () => this.setState({open: false});


  render() {
    const Cont={
      width:"100%",
      height:"2vh",
      backgroundColor:"rgba(250,50,50,.9)",
      display:"flex",
      textIndent:"25px",
      padding:"3%",



    }

    const fRight2={
      position:"absolute",
      right:"30px",
    }


    const mCont={
      width:"100%",
      height:"8vh",
      backgroundColor:"rgba(250,50,50,.9)",
      display:"flex",
      textIndent:"5px",
      padding:"3%",



    }

    const bttn={
      border:"1px solid black",
      height:"auto",
      width:"auto",
    }

    const pos={

    }
    const HeaderText={
      marginLeft:"5px",
      justifyContent:"center",
      marginTop:"0px",
      color:"white",
      textDecoration:"none",

    }
    const fRight={
      position:"absolute",
      right:"15px",
    }
    return (
      <div>
        <Responsive minDeviceWidth={660}>
          <div style={Cont}>

            <div style={pos}><FilterListIcon color="white" hoverColor="rgba(20,192,11,1)"
            onTouchTap={this.handleToggle}/></div>

          <Link to={"/"}><h3 style={HeaderText}>SumoRobotLeague</h3></Link>

          <Link to={"/shoppingcart"}><div style={fRight2}><ShoppingCartIcon color="white"/></div></Link>

            <Drawer
              docked={false}
              width={200}
              containerStyle={{background:"linear-gradient( rgba(250,200,200,1),rgba(255,255,255,.2))"}}
              open={this.state.open}
              onRequestChange={(open) => this.setState({open})}>

              <MenuItem onTouchTap={this.handleClose} primaryText="SIGN IN" containerElement={<Link to="/signin"></Link>}/>
              <MenuItem onTouchTap={this.handleClose} primaryText="Sign Up" containerElement={<Link to="/signup"></Link>}/>
              <MenuItem onTouchTap={this.handleClose} primaryText="About SRL" containerElement={<Link to="/aboutsrl"></Link>}/>
              <MenuItem onTouchTap={this.handleClose} primaryText="Products" containerElement={<Link to="/allproducts"></Link>}/>
              <MenuItem onTouchTap={this.handleClose} primaryText="Education" containerElement={<Link to="/education"></Link>}/>
              <MenuItem onTouchTap={this.handleClose} primaryText="Contact" containerElement={<Link to="/contact"></Link>}/>

            </Drawer>

          </div>
        </Responsive>


        <Responsive maxDeviceWidth={659}>
        <div style={mCont}>


          <div style={pos}><FilterListIcon color="white" hoverColor="rgba(20,192,11,1)"
          onTouchTap={this.handleToggle}/></div>

        <Link to={"/"}><h3 style={HeaderText}>SumoRobotLeague</h3></Link>

        <Link to={"/shoppingcart"}><div style={fRight}><ShoppingCartIcon color="white"/></div></Link>

         <Drawer
           docked={false}
           width={200}
           containerStyle={{background:"linear-gradient( rgba(250,200,200,1),rgba(255,255,255,.2))"}}
           open={this.state.open}
           onRequestChange={(open) => this.setState({open})}>

           <MenuItem onTouchTap={this.handleClose} primaryText="SIGN IN" containerElement={<Link to="/signin"></Link>}/>
           <MenuItem onTouchTap={this.handleClose} primaryText="Sign Up" containerElement={<Link to="/signup"></Link>}/>
           <MenuItem onTouchTap={this.handleClose} primaryText="About SRL" containerElement={<Link to="/aboutsrl"></Link>}/>
           <MenuItem onTouchTap={this.handleClose} primaryText="Products" containerElement={<Link to="/allproducts"></Link>}/>
           <MenuItem onTouchTap={this.handleClose} primaryText="Education" containerElement={<Link to="/education"></Link>}/>
           <MenuItem onTouchTap={this.handleClose} primaryText="Contact" containerElement={<Link to="/contact"></Link>}/>

         </Drawer>
       </div>
       </Responsive>




        </div>

    );
  }
}

Header.contextTypes = {
  router: React.PropTypes.object
}

export default Header;
