import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './student_portfolio.css';
import Portfolio from './Components/Portfolio/_portfolio'

class StudentPortfolio extends Component { 
  componentDidMount(){
    const navToggle = document.querySelector('.student-portfolio').querySelector('.nav-toggle');
    const navLinks = document.querySelector('.student-portfolio').querySelectorAll('.nav__link')

    navToggle.addEventListener('click', () => {
        document.querySelector('.student-portfolio-container').classList.toggle('nav-open');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            document.querySelector('.student-portfolio-container').classList.remove('nav-open');
        })
    })
  }
  
  render(){
    return(
      <Router>
        <div className = 'student-portfolio'>
          <div className="student-portfolio-container">
          <Portfolio />
          </div>
        </div>
      </Router>
    )
  }
}

export default StudentPortfolio;
