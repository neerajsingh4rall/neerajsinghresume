import React, { Component } from 'react';
import './App.css';
import Header from '../src/component/Header/Header';
import Nav from '../src/component/Nav/Nav';
import LeftEdge from '../src/component/LeftEdge/LeftEdge';
import RightEdge from '../src/component/RightEdge/RightEdge';
import Project from '../src/component/Project/Project';
import Education from '../src/component/Education/Education';
import About from '../src/component/About/About';
import Footer from '../src/component/Footer/Footer';
import Sociable from '../src/component/Sociable/Sociable';
import ToggleButton from '../src/component/ToggleButton/ToggleButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

// const icon = <FontAwesomeIcon icon={faFacebook} />
 
library.add( faCheckSquare, faCoffee)

class App extends Component {
state = {
  sideDrawerOpen: false
}
HamBurgerClickHandler= () => {
  this.setState((prevState)=>{
    return {sideDrawerOpen: !prevState.sideDrawerOpen};
  })
};

  render() {

let sideDrawer;

if(this.state.sideDrawerOpen) {
  sideDrawer = <Nav />
}

    return (
      <div className="component">
        <div className="row">

        <div className="navigation">
        <div className="navBar"><Nav/></div>
          <div className="buger"><ToggleButton transfer={this.HamBurgerClickHandler}/></div>
          {sideDrawer}
        </div>
          <div className="header"><Header /></div>

          <div className="body about_app">
            <h1 className="main_heading" >about me</h1>
            <div className="nav"><About /></div>
          </div>

          <div className="body tec_app">
            <h1 className="main_heading" >technologies known</h1>
            <div className="main">
              <div className="leftedge"><LeftEdge /></div>
              <div className="rightedge"><RightEdge /></div>
            </div>
          </div>

          <div className="body project_app">
            <h1 className="main_heading" >recent scratch projects in <a href="https://github.com/neerajsingh4rall">github</a></h1>
            <div className="project"><Project /></div>
          </div>

          <div className="body education_app">
            <h1 className="main_heading" >education</h1>
            <div className="nav"><Education /></div>
          </div>

          <div className="body contect_app">
            <h1 className="main_heading" >contact me</h1>
            <div className="nav"><Footer/></div>
          </div>
          <div className="nav"><Sociable/></div>

        </div>
      </div>
    );
  }
}

export default App;
