import React, { Component } from 'react'
import SignIn from './SignInForm'
import SignUp from './SignUpForm'

class SignInSignUp extends Component{
    render(){
        return (
            <div class="forms-container">
                <div class="signin-signup">
                    <SignIn/>
                    <SignUp/>
                </div>
            </div>
                )
      }
        }


export default SignInSignUp;