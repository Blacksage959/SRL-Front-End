/*
 *
 * AboutSrl
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Header from 'components/Header';
import Footer from 'components/Footer';

export default class AboutSrl extends React.PureComponent {
  render() {
    const contain={
      padding:"8%",
      marginTop:"-25px",
    }

    const auto={
      width:"auto",
      height:"auto",

    }
    const title={
      marginTop:"75px",
      height:"100px",
      width:"100%",
      textAlign:"center",


    }
    const color={
      color:"rgba(255,60,60,1)",
    }
    return (
      <div>
        <Helmet title="AboutSrl" meta={[ { name: 'description', content: 'Description of AboutSrl' }]}/>

      <Header/>

        <div style={title}>
          <h1 style={color}>SumoRobotLeague</h1>
        </div>

      <div style={contain}>

      <div style={auto}>
        <p>Sumo Robot League is a non-profit robotics curriculum and sports league operated by HACK Augusta. Students design and build robots to compete in fully autonomous sumo wrestling. Each match motivates kids to learn and understand the principles of S.T.E.M. (Science, Technology, Engineering and Math), preparing them for the future by fostering an interest in these critical disciplines and an understanding of how they are practiced.</p><br/>
      </div>

      <h2 style={color}>Competition/Curriculum</h2>
      <p>Sumo Robot League is a scalable STEM education platform that offers an affordable competitive robotics curriculum for middle and high school students. Our program provides multiple hands on lessons that give students the opportunity to build electrical circuits, design and 3D print adaptive components, and code sensor-based autonomous response algorithms using the actual C++ programming language. In additiona, our kits are expandable to include exercises in mobile app development, machine learning, and the internet of things. </p>
      <p>The League has a Fall and Spring season coordinated with local school system schedules. Regional competitions are held at the end of each season in local communities. The championship tournament is held in Augusta, Georgia at the Greater Augusta Innovation Academy located in an 18,000 sq. foot historic schoolhouse built in 1802. HACK Augusta is the non-profit that manages Sumo Robot League as well as theClubhou.se, a makerspace and startup incubator. This short video done by one of our students gives a glimpse into the scope of our program and what kids can do.</p><br/>

      <h2 style={color}>Benefits</h2>
      <p>Sumo Robot League is hands on, creative, outside-the-box, and self directed. We offer training, online resource libraries, and weekly virtual support for teachers and volunteers. Though our kits include all parts necessary for building a robot, we also include access to CAD and STL files so kids can design and 3D print their own custom robots. By merging sports, design, engineering, and programming fundamentals, Sumo Robot League helps kids find what motivates each of them to learn coding and STEM (Science, Technology, Engineering, Arts and Math). </p><br/>

      <h2 style={color}>Our Goals</h2>
      <p>1. Teach students about robots and programming.</p>
      <p>2. To give marginalized students the same recognition for efforts in technology as that given to students in athletics.</p>
      <p>3. Provide tools, educational opportunities for science and math teachers to incorporate this curriculum into their STEM standards and Career Pathway standards.</p>
      </div>

    <Footer/>
    </div>
    );
  }
}
