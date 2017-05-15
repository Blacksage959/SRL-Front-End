/**
*
* Header
*
*/

import React from 'react';

class Header extends React.PureComponent {
  render() {
    const mCont={
      width:"100%",
      height:"auto",
      backgroundColor:"white",


    }

    const srlLogoPos={

    }
    return (
      <div>
        <div style={mCont}>
          <img style={srlLogoPos} src={"https://static1.squarespace.com/static/55f05957e4b049cf1b1396b0/t/5612d125e4b033aa912f3442/1444073766267/SumobotHeroImage_skinny.jpg"}/>
        </div>
      </div>
    );
  }
}

export default Header;
