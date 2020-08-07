import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class SignIn extends Component{
    render(){
        return (
            <form action="#" class="main-form sign-in-form">
            <h2 class="title-main">Sign in</h2>
            <p class="social-text">And start managing your website</p>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <Link class="passForgot" to="/Dashboard/page_not_made_yet">Password forgotten ?</Link>
            <Link to="/Dashboard/personal_info" className="btn-izi solid">login</Link>
            <p class="social-text">Or Sign in with social platforms</p>
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


export default SignIn;