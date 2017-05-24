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

      padding:"3%",
      flexDirection:"row",
      position:"fixed",
      top:"0",
      zIndex:"99999",




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
      position:"fixed",
      top:"0",
      zIndex:"99999",




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
    const HeaderTextB={
      marginLeft:"10px",
      justifyContent:"center",
      marginTop:"-40px",
      color:"white",
      underline:"none",
      fontSize:"5em",

    }
    const fRight={
      position:"absolute",
      right:"15px",
    }

    const fRightB={
      position:"absolute",
      right:"100px",
    }
    const homeNav={
      width:"10%",
      position:"relative",
      top:"20px",
      display:"flex",
      flexDirection:"row",


    }
    const block1={

    }
    const block={

    }
    const lastBlock={


    }
    return (
      <div>
        <Responsive minDeviceWidth={660}>
          <div style={Cont}>
            <Link to={"/"}><h3 style={HeaderTextB}>SumoRobotLeague</h3></Link>

              <nav style={homeNav}>
                <FlatButton  style={block1}  onTouchTap={()=> this.handleNav("/aboutsrl")}>About SRL</FlatButton>

                <FlatButton  style={block}  onTouchTap={()=> this.handleNav("/allproducts")}>Products</FlatButton>

                <FlatButton  style={block}  onTouchTap={()=> this.handleNav("/education")}>Education</FlatButton>

                <FlatButton  style={block}  onTouchTap={()=> this.handleNav("/gallery")}>Gallery</FlatButton>

                <FlatButton  style={block}  onTouchTap={()=> this.handleNav("/myprofile")}>MyProfile</FlatButton>

                <FlatButton  style={block}  onTouchTap={()=> this.handleNav("/contact")}>Contact</FlatButton>

                <FlatButton  style={block}  onTouchTap={()=> this.handleNav("/signin")}>SignIn</FlatButton>

                <FlatButton  style={lastBlock}  onTouchTap={()=> this.handleNav("/signup")}>SignUp</FlatButton>

              </nav>

          <Link to={"/shoppingcart"}><div style={fRightB}><ShoppingCartIcon color="white"/></div></Link>



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
