
import React from 'react';
import Helmet from 'react-helmet';
import FlatButton from 'material-ui/FlatButton';
import {Link} from "react-router";
import EditIcon from 'material-ui/svg-icons/image/edit';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

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


 deleteRole = () => {
   var _this=this;
   fetch("http://localhost:8000/api/deleteRole/" + this.props.params.id + "?token=" + this.state.token,{
     method:"post"
   })
   .then(function(response){
     return response.json();
   })

   .then(function(json){
      alert("role deleted.");
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
      <FlatButton label="Delete" primary={true} onTouchTap={()=>this.deleteRole()}/>,
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
    paddingLeft:"5px",
    }

    const p={
      fontFamily:"Lato",

      fontSize:"1em",

    paddingLeft:"5px",
    }

    return (
      <div>
        <Helmet title="SRole" meta={[ { name: 'description', content: 'Description of SRole' }]}/>


          <div style={env}>
            <div style={header}>
              <div style={logo}>
                <FlatButton style={logoBttn} onTouchTap={()=> this.handleNav("/roles")}> SHOW ROLE- </FlatButton>
              </div>

              <div style={newFind}>

                    <FlatButton style={bttn}><Link to={`/uprole/${this.state.role.id}`}><EditIcon/>Edit</Link ></FlatButton>
                  <FlatButton style={bttn} onTouchTap={this.handleOpen}><DeleteIcon/>Delete</FlatButton >
              </div>


              <p style={p}>RoleID:{this.state.role.id}</p><br/>
              <p style={p}>Name:{this.state.role.name}</p><br/>


            <Dialog actions={actions} modal={false} open={this.state.open} onRequestClose={this.handleClose}>
              Delete this Role?
            </Dialog>
</div>
</div>
      </div>
  );
  }
}


SRole.contextTypes = {
  router: React.PropTypes.object
}
