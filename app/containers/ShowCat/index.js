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
    return (
      <div>
        <Helmet title="Robots" meta={[ { name: 'description', content: 'Description of Robots' }]}/>
<Header/>
          <div>

            <Link to={"/allproducts"}><h1>Back -</h1></Link>

              <div style={env}>
                {this.state.products.map((product, index) => (
                  <p>

                     <p>name:{product.name}<AddIcon/><AddShoppingCartIcon/></p>
                     <p>pictures:{product.images}</p>
                     <p>price: {product.price}</p><br/>

                  </p>
                ))}
              </div>


          </div>
<Footer/>
</div>
    );
  }
}
