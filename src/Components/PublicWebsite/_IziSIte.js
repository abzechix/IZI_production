import React, { Component } from 'react'
import SignInSignUp from './forms/_SignInSignUP'
import Panels from './panels/_Panels'
import Navbar from './Navbar/Navbar';
import '../../styles/iziSite.css';

class IziSite extends Component{
    componentDidMount(){
        const navToggle = document.querySelector('.nav-toggle');
        const navLinks = document.querySelectorAll('.nav__link');
    
        navToggle.addEventListener('click', () => {
            document.body.classList.toggle('nav-open');
        });
    
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                document.body.classList.remove('nav-open');
            })
        })
    
        const sign_in_btn = document.querySelector("#sign-in-btn");
        const sign_up_btn = document.querySelector("#sign-up-btn");
        const container = document.querySelector(".container");
        var logo = document.getElementById('logo');
        var invLogo = document.getElementById('invLogo');
    
        sign_up_btn.addEventListener("click", () => {
          logo.classList.add('logo-animated')
          logo.parentNode.replaceChild(logo, logo);
          invLogo.parentNode.replaceChild(invLogo, invLogo);
          container.classList.add("sign-up-mode");
        });
    
        sign_in_btn.addEventListener("click", () => {
          logo.classList.add('logo-animated')
          invLogo.parentNode.replaceChild(invLogo, invLogo);
          logo.parentNode.replaceChild(logo, logo);
          container.classList.remove("sign-up-mode");
          
        });
    
      }
    render(){
        return (
            <div class="container">
                <Navbar/>
                <SignInSignUp/>
                <Panels/>
            </div>
                )
      }
        }


export default IziSite;

