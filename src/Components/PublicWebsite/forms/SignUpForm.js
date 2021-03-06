import React, { Component } from 'react';
import logo from '../../../img/logo.png'

class SignUp extends Component{
    render(){
        return (
            <form action="#" class="main-form sign-up-form">
            <img id= 'invLogo' className="logo-izi" src={logo} alt=""></img>
            <h2 class="title-main">Sign up</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div class="input-field">
              <i class="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <a href="/Dashboard" class="btn-izi" >Sign up</a>
            <p class="social-text">Or Sign up with social platforms</p>
            <div class="social-media">
              <a href="#" class="social-icon">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-google"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
            </form>
                )
      }
        }
        export default SignUp;