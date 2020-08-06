import React, { Component } from 'react'
import SignInSignUp from './forms/_SignInSignUP'
import Panels from './panels/_Panels'
import Navbar from './Navbar/NavbarMain';
import '../../styles/iziSite.css';

class IziSite extends Component{
    componentDidMount(){
        const navToggle = document.querySelector('.nav-main-toggle');
        const navLinks = document.querySelectorAll('.nav-main__link');
    
        navToggle.addEventListener('click', () => {
            document.body.classList.toggle('nav-main-open');
        });
    
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                document.body.classList.remove('nav-main-open');
            })
        })
    
        const sign_in_btn = document.querySelector("#sign-in-btn");
        const sign_up_btn = document.querySelector("#sign-up-btn");
        const container_main = document.querySelector(".container_main");
        var logo = document.getElementById('logo');
        var invLogo = document.getElementById('invLogo');
    
        sign_up_btn.addEventListener("click", () => {
          logo.classList.add('logo-animated')
          logo.parentNode.replaceChild(logo, logo);
          invLogo.parentNode.replaceChild(invLogo, invLogo);
          container_main.classList.add("sign-up-mode");
        });
    
        sign_in_btn.addEventListener("click", () => {
          logo.classList.add('logo-animated')
          invLogo.parentNode.replaceChild(invLogo, invLogo);
          logo.parentNode.replaceChild(logo, logo);
          container_main.classList.remove("sign-up-mode");
          
        });
    
      }
    render(){
        return (
          
                <div class="container_main">
                <Navbar/>
                <SignInSignUp/>
                <Panels/>
                </div>
            
                )
      }
        }


export default IziSite;

