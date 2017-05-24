/*
 *
 * ShowProd
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Header from 'components/Header';
import Footer from 'components/Footer';

export default class ShowProd extends React.PureComponent {

  constructor(props){
  super(props);
  this.state ={
    product:""
   }
  }

componentWillMount(){

  fetch("http://localhost:8000/api/showProduct/" + this.props.params.id)
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      this.setState({
        product:json
      })
    }.bind(this))
  }


  render() {

    const p={
      fontFamily:"Lato",
      fontSize:"1em",
      paddingLeft:"5px"
    }

    const compress={
      maxHeight:"90vh",
      padding:"5%",
      lineHeight:"1",
      marginTop:"10%"

    }

    return (
      <div>
        <Helmet title="ShowProd" meta={[ { name: 'description', content: 'Description of ShowProd' }]}/>
        <Header/>
        <div style={compress}>
          <p style={p}>Product ID:{this.state.product.id}</p>
          <p style={p}>Name:{this.state.product.name}</p>
          <p style={p}>Images:{this.state.product.images}</p>
          <p style={p}>Price:{this.state.product.price}</p>
          <p style={p}>Description:{this.state.product.description}</p>
          <p style={p}>Category ID:{this.state.product.categoryID}</p>
          <p style={p}>Availability:{this.state.product.availability}</p>
        </div>

        <Footer/>
      </div>
    );
  }
}
