import React, { Component } from 'react';

import Navbar from '../Layout/Navbar_student'
import Footer from './footer'
import ProjectDetails from './_project_details'

class ProjectView extends Component { 

  render(){
    return(
        <div className = ''>
          <Navbar />
          <ProjectDetails/>
          <Footer/>
        </div>

    )
  }
}

export default ProjectView