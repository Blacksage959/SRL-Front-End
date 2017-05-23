

import React from 'react';
import Helmet from 'react-helmet';
import FlatButton from 'material-ui/FlatButton';
import {Link} from "react-router";
import EditIcon from 'material-ui/svg-icons/image/edit';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

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



  deleteCategory = () => {
    var _this=this;
    fetch("http://localhost:8000/api/deleteCategory/" + this.props.params.id + "?token=" + this.state.token,{
      method:"post"
    })
    .then(function(response){
      return response.json();
    })

    .then(function(json){
       alert("Category deleted.");
       _this.handleClose();
     })
  }

  state={
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});

  };



  handleNav = (location) => {
    this.context.router.push(location);
  }


  render() {

    const actions=[
      <FlatButton label="Cancel" primary={true} onTouchTap={this.handleClose}/>,
      <FlatButton label="Delete" primary={true} onTouchTap={()=>this.deleteCategory()}/>,
    ];


    const env={
      height:"100vh",
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
      height:"20%",
    }
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

          <div style={env}>
            <div style={header}>
              <div style={logo}>
                <p><FlatButton style={logoBttn} onTouchTap={()=> this.handleNav("/categories")}> SHOW CATEGORY- </FlatButton></p>
              </div>

              <div style={newFind}>
                  <FlatButton style={bttn}><Link to={`/upcat/${this.state.category.id}`}><EditIcon/>Edit</Link ></FlatButton>
                  <FlatButton style={bttn} onTouchTap={this.handleOpen}><DeleteIcon/>Delete</FlatButton>
              </div>


        <div style={p}>
        <p> Category ID:{this.state.category.id}</p><br/>
        <p> Name:{this.state.category.name}</p><br/>
        </div>

        <Dialog actions={actions} modal={false} open={this.state.open} onRequestClose={this.handleClose}>
          Delete this Category?
        </Dialog>


      </div>
      </div>
      </div>
    );
  }
}

SCat.contextTypes = {
  router: React.PropTypes.object
}
