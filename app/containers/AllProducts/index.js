/*
 *
 * AllProducts
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from "react-router";
import AddIcon from 'material-ui/svg-icons/content/add';
import Header from 'components/Header';
import Footer from 'components/Footer';

export default class AllProducts extends React.PureComponent {
  constructor(props){
    super(props);
    this.state ={
      categories:[],
    }
  }

    componentWillMount(){
      fetch("http://localhost:8000/api/getCategories")
      .then(function(response){
        return response.json();
      })
      .then(function(json){
        this.setState({
          categories:json
        })
    }.bind(this))

  }


  render() {

    const env={
      height:"80vh",
      width:"100%",
      marginTop:"30px",
      padding:"5%",

    }

    const pushCont={
      margin:"20px",
      fontWeight:"bold",

    }


    return (
      <div>
        <Helmet title="AllProducts" meta={[ { name: 'description', content: 'Description of AllProducts' }]}/>
        <Header/>



          <div style={env}>
            <Link to={"/"}><h1>Categories -</h1></Link>
            {this.state.categories.map((category, index) => (
              <div style={pushCont}>
                {category.name}
                <Link to={`/showcat/${category.id}`}><AddIcon/></Link>
              </div>
          ))}
          </div>
          <Footer/>
      </div>
    );
  }
}
