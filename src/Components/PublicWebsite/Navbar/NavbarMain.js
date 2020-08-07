import React, { Component } from 'react'

class Navbar extends Component{
    render(){
        return (
            <header className='main_header'>
                <button className="nav-toggle-main" aria-label="toggle navigation">
                    <span className="hamburger-main"></span>
                </button>
                <nav className="nav-main">
                    <ul className="nav-main__list">
                        <li className="nav-main__item"><a href="#tuto" className="nav-main__link">What is iziSite</a></li>
                        <li className="nav-main__item"><a href="#tuto" className="nav-main__link">Tutorial</a></li>
                        <li className="nav-main__item"><a href="#order" className="nav-main__link">Order your costumized design</a></li>
                        <li className="nav-main__item"><a href="#collab" className="nav-main__link">Collaborate</a></li>
                    </ul>
                </nav>
            </header>
                )
      }
        }


export default Navbar;