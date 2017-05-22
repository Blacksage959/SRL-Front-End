/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Header from 'components/Header';
import Edit from 'material-ui/svg-icons/image/edit';
import Add from 'material-ui/svg-icons/content/add';
import Delete from 'material-ui/svg-icons/action/delete';

export default class Home extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>

        <Header/>
/*
---- shipping info for orders
    productts under categories, roles, ---- users under this role id
    ---availability message instead of number----
     for find-- have search and filters----display img preview instead file -----
     ---home button in top corner srl head icon

     edit page display orig at top , form style below with default text

     delete prompts are you sure you want to delete



     what if user wants to edit his page

     can admin edit or delete user

     should i make all edit pages



     edit delete icon routes resolveed

*/
      </div>
    );
  }
}
