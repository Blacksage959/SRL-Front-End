
import React from 'react';
import Helmet from 'react-helmet';
import FlatButton from 'material-ui/FlatButton';
import {Link} from "react-router";
import EditIcon from 'material-ui/svg-icons/image/edit';
import DeleteIcon from 'material-ui/svg-icons/action/delete';

export default class SRole extends React.PureComponent {

  constructor(props){
  super(props);
  this.state ={
    role:"",
    token:sessionStorage.getItem("token"),
   }
  }

componentWillMount(){

  fetch("http://localhost:8000/api/showRole/" + this.props.params.id + "?token=" + this.state.token)
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      this.setState({
        role:json
      })
    }.bind(this))
  }


  handleNav = (location) => {
    this.context.router.push(location);
  }


  render() {

    const logoBttn={
      height:"auto",
      width:"auto",
      fontFamily:"Lato",
      letterSpacing:".6em",
      fontSize:"1em",
    backgroundColor:"#555",
    paddingLeft:"5px"
    }

    const p={
      fontFamily:"Lato",

      fontSize:"1em",

    paddingLeft:"5px"
    }

    return (
      <div>
        <Helmet title="SRole" meta={[ { name: 'description', content: 'Description of SRole' }]}/>

      <FlatButton style={logoBttn} onTouchTap={()=> this.handleNav("/roles")}> SHOW ROLE- </FlatButton>

        <div>
        <EditIcon color="#99999" hoverColor="rgba(20,192,11,1)"/>
        <DeleteIcon color="#99999" hoverColor="rgba(20,192,11,1)"/>
        </div>

          <p style={p}>RoleID:{this.state.role.id}</p><br/>
          <p style={p}>Name:{this.state.role.name}</p><br/>


      </div>
    );
  }
}


SRole.contextTypes = {
  router: React.PropTypes.object
}
