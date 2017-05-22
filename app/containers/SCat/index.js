

import React from 'react';
import Helmet from 'react-helmet';
import FlatButton from 'material-ui/FlatButton';
import {Link} from "react-router";
import EditIcon from 'material-ui/svg-icons/image/edit';
import DeleteIcon from 'material-ui/svg-icons/action/delete';

export default class SCat extends React.PureComponent {

  constructor(props){
  super(props);
  this.state ={
    category:"",
    token:sessionStorage.getItem("token"),
   }
  }

componentWillMount(){

  fetch("http://localhost:8000/api/showCategory/" + this.props.params.id + "?token=" + this.state.token)
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      this.setState({
        category:json
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
        <Helmet title="SCat" meta={[ { name: 'description', content: 'Description of SCat' }]}/>
          <p><FlatButton style={logoBttn} onTouchTap={()=> this.handleNav("/categories")}> SHOW CATEGORY- </FlatButton></p>

            <div>
            <EditIcon color="#99999" hoverColor="rgba(20,192,11,1)"/>
            <DeleteIcon color="#99999" hoverColor="rgba(20,192,11,1)"/>
            </div>

        <div style={p}>
        <p> Category ID:{this.state.category.id}</p><br/>
        <p> Name:{this.state.category.name}</p><br/>
        </div>

      </div>
    );
  }
}

SCat.contextTypes = {
  router: React.PropTypes.object
}
