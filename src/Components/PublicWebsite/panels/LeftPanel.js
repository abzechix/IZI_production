import React, { Component } from 'react'
import log from '../../../img/log.svg'
import logoInverted from '../../../img/logoInverted.png'
class LeftPanel extends Component{
    render(){
        return (
            <div className="panel left-panel">
            <div className="content-main">
              <h3>Create your own website now !</h3>
              <p>
                For FREE, Student, Artist, small business Owner, content Creator, WHATEVER YOU ARE DOING,
                be PRESENT. Online!
              </p>
              <button className="btn-izi transparent" id="sign-up-btn">
                Sign up
              </button> <br></br>
              <img id= 'logo' className="logo-inverted" src={logoInverted} alt=""></img>
            </div>
            <img src={log} className="imageBig" alt="" />
          </div>
                )
      }
        }


export default LeftPanel;