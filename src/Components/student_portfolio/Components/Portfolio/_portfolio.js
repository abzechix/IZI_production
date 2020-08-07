import React, { Component } from 'react';

import Navbar from '../Layout/Navbar_student'
import PersonalInfo from './pesronal_Info'
import Services from './what_i_do'
import AbooutMe from './who'
import MyWork from './work'
import Footer from './footer'

class Portfolio extends Component { 

  render(){
    return(
        <div className = ''>
          <Navbar />
          <PersonalInfo />
          <Services/>
          <AbooutMe/>
          <MyWork/>
          <Footer/>
        </div>

    )
  }
}

export default Portfolio;
