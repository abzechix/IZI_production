import React, { Component } from 'react'

class EditLoginUserName extends Component{

    render(){
        return (
            <div className="sub-setting-element">
            <a href="#" className='sub-settingButton'><span>Edit Username</span><i className="fas fa-at"></i> </a>
            <div className="settingsFormHidden subSetForm" id="subSettingsForm">
                    <div className="editing-form">
                <div className="settingEdit">
                    <form action="index.html" autoComplete="off" className="editform">
                        <div className = "formInputs">
                            <div className="input-container">
                                <input type="text" name="newUserName" className="input" />
                                <label htmlFor="">New Username</label>
                                <span>New Username</span>
                            </div>
                            <div className="input-container">
                                <input type="password" name="newPass" className="input" />
                                <label htmlFor=""> Password</label>
                                <span>Password</span>
                            </div>
                        </div>
                        
                        <div className = "formButtons">
                            <div className="input-container">
                                <i className="far fa-save"></i>
                                <input type='submit' className='formButtonSolid' id="saveNewEmail" value='Save New Username'/>  
                            </div>
                            <div className="input-container">
                                <i className="fas fa-arrow-left"></i> 
                                <input type='reset' className='formButtonTransparent' id="cancelPassword" value='Cancel'/>  
                            </div>
                            <div className="input-container">
                                <i className="fas fa-question"></i>
                                <input type='button' className='formButtonText' id="forgetPassword" value='Need Help ?'/>  
                            </div>
                        </div>
                    
                    </form>
                </div>
                </div>
            </div>
        </div>
          
                )
      }
        }


export default EditLoginUserName;