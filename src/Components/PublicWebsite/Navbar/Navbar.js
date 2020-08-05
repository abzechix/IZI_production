import React, { Component } from 'react'

class Navbar extends Component{
    render(){
        return (
            <header>
        
        <button className="nav-toggle" aria-label="toggle navigation">
            <span className="hamburger"></span>
        </button>
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item"><a href="#tuto" className="nav__link">What is iziSite</a></li>
                <li className="nav__item"><a href="#tuto" className="nav__link">Tutorial</a></li>
                <li className="nav__item"><a href="#order" className="nav__link">Order your costumized design</a></li>
                <li className="nav__item"><a href="#collab" className="nav__link">Collaborate</a></li>
            </ul>
        </nav>
    </header>
                )
      }
        }


export default Navbar;