import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './student_portfolio.css';
import Portfolio from './Components/Portfolio/_portfolio'

class StudentPortfolio extends Component { 
  componentDidMount(){
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelectorAll('.nav__link')

    navToggle.addEventListener('click', () => {
        document.body.classList.toggle('nav-open');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            document.body.classList.remove('nav-open');
        })
    })
  }
  
  render(){
    return(
      <Router>
        <div>
          <Portfolio />
        </div>
      </Router>
    )
  }
}

export default StudentPortfolio;
