import React, { Component } from 'react'
import register from '../../../img/register.svg'


class RightPanel extends Component{
    render(){
        return (
            <div className="panel right-panel">
                <div className="content">
               
                    <h3>You are already signed up ?</h3>
                    <p>
                    Sign-in and start managing and editing your website.
                    </p>
                    <button className="btn transparent" id="sign-in-btn">
                    Sign in
                    </button>
                </div>
                <img src={register} className="imageBig" alt="" />
            </div>
                )
      }
        }


export default RightPanel;