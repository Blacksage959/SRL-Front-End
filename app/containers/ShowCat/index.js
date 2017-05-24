/*
 *
 * ShowCat
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from "react-router";
import AddIcon from 'material-ui/svg-icons/content/add';
import Header from 'components/Header';
import Footer from 'components/Footer';
import AddShoppingCartIcon from 'material-ui/svg-icons/action/add-shopping-cart';

export default class ShowCat extends React.PureComponent {
  constructor(props){
    super(props);
    this.state ={
      category:"",
      products:[],

    }
  }


  componentWillMount(){
    fetch("http://localhost:8000/api/showCategory/" + this.props.params.id)
    .then(function(response){
      return response.json();

    })
    .then(function(json){
      console.log(json.products);
      this.setState({
        category:json.category,
        products:json.products
      })
    }.bind(this))

  }


  render() {
    const env={
      height:"auto",
      width:"100%",

    }
    const imgConstraint={
      height:"100%",
      width:"100%",

    }
    const displayBox={
      width:"100%",
      height:"300px",
      borderTop:"solid 1px black",
      marginBottom:"50px",


    }
    const pushRight={
      position:"absolute",
      right:"5%",

    }

    const name={
      fontFamily:"Lato",
      fontSize:"2em",
      fontWeight:"bold",

    }

    const price={
      fontFamily:"Lato",
      fontSize:"1em",


    }
    const highlight={
      height:"15%",
      backgroundColor:"#999",
      padding:"1.5%",
      fontFamily:"Lato",
      fontSize:"2em",
      backgroundColor:"rgba(255,60,60,1)",

    }
    const mid={
      height:"70%",
    }
    return (
      <div>
        <Helmet title="Robots" meta={[ { name: 'description', content: 'Description of Robots' }]}/>
        <Header/>

          <div>
            <Link to={"/allproducts"}><h1>Back -</h1></Link>
            <div style={env}>
              {this.state.products.map((product, index) => (

                <div style={displayBox}>

                <Link to={`showprod/${product.id}`}>  <div style={highlight}>
                    {product.name}
                    <AddIcon/><AddShoppingCartIcon style={pushRight}/>
                  </div>

                  <div style={mid}>
                    <img style={imgConstraint} src={product.images}/>
                  </div>

                  <div style={highlight}>
                    {product.price}
                  </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

        <Footer/>
      </div>
    );
  }
}
