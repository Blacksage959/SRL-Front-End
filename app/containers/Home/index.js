/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Header from 'components/Header';
import HomeContent from 'components/HomeContent';
import HomeSales from 'components/HomeSales';
import Edit from 'material-ui/svg-icons/image/edit';
import Add from 'material-ui/svg-icons/content/add';
import Delete from 'material-ui/svg-icons/action/delete';
import Footer from 'components/Footer';

export default class Home extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>

        <Header/>
        <HomeContent/>
        <HomeSales/>
        <Footer/>


      </div>
    );
  }
}
