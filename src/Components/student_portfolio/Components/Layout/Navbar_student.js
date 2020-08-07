import React from 'react'
import {Link} from 'react-router-dom'
import logoImg from '../../img/logo.png'

const Navbar = () =>{
    return (
        <div className='header-student'>
        <div className="logo-student">
                <img className = 'student-img' src={logoImg} alt=""></img>
        </div>
        <button className="nav-toggle" aria-label="toggle navigation">
            <span className="hamburger"></span>
        </button>
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item"><a href="#home" className="nav__link">Home</a></li>
                <li className="nav__item"><a href="#services" className="nav__link">My Services</a></li>
                <li className="nav__item"><a href="#about" className="nav__link">About me</a></li>
                <li className="nav__item"><a href="#work" className="nav__link">My Work</a></li>
                <li className="nav__item"><a href="/" className="nav__link">IZI Site</a></li>
            </ul>
        </nav>
        </div>
    )
}


export default Navbar;