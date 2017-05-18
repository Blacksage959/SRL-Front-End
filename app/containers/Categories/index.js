/*
 *
 * Categories
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import FlatButton from 'material-ui/FlatButton';
import {Link} from "react-router";
import EditIcon from 'material-ui/svg-icons/image/edit';
import AddIcon from 'material-ui/svg-icons/content/add';
import DeleteIcon from 'material-ui/svg-icons/action/delete';

export default class Categories extends React.PureComponent {


  constructor(props){
    super(props);
    this.state ={
      categories:[],
      name:"",
      token:sessionStorage.getItem("token"),
    }
  }


  componentWillMount(){
    fetch("http://localhost:8000/api/getCategories?token=" + this.state.token, {
      header:{
        "Authorization":"Bearer " + this.state.token
      }
    })
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      this.setState({
        categories:json
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
      fontFamily:"Lato",
      letterSpacing:".4em",
      fontSize:"1.5em",
      backgroundColor:"#555",
      paddingLeft:"5px"
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
      height:"20%"
    }
    const remainder={
      height:"85vh",
    }
    return (
      <div>

        <Helmet title="Categories" meta={[ { name: 'description', content: 'Description of Categories' }]}/>

        <div style={env}>
          <div style={header}>
            <div style={logo}>
              <FlatButton style={logoBttn} onTouchTap={()=> this.handleNav("/admindash")}> CATEGORIES- </FlatButton>
            </div>

            <div style={newFind}>
              <FlatButton style={bttn} onTouchTap={()=> this.handleNav("/ncat")}> NEW+</FlatButton>
              <FlatButton style={bttn} onTouchTap={()=> this.handleNav("/fcat")}> FIND+</FlatButton>
            </div>

          </div>

          <div style={env}>
            {this.state.categories.map((category, index) => (
              <div>
                <p>
                  {category.id}{category.name}
                  <Link to={`/scat/${category.id}`}><AddIcon color="#99999" hoverColor="rgba(20,192,11,1)"/></Link>
                  <Link to={`/upcat/${category.id}`}><EditIcon color="#99999" hoverColor="rgba(20,192,11,1)"/></Link>
                  <DeleteIcon color="#99999" hoverColor="rgba(20,192,11,1)"/>
                </p>
              </div>
            ))}
          </div>



        </div>

      </div>
    );
  }
}
Categories.contextTypes = {
  router: React.PropTypes.object
}
