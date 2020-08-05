import React, { Component } from 'react'

class EditPassword extends Component{

    render(){
        return (
            <div className="sub-setting-element">
            <a href="#" className='sub-settingButton'><span>Edit Password</span><i className="fas fa-lock"></i></a>
            <div className="settingsFormHidden subSetForm" id="subSettingsForm">
                    <div className="editing-form">
                <div className="settingEdit">
                    <form action="index.html" autoComplete="off" className="editform">
                        <div className = "formInputs">
                            <div className="input-container">
                                <input type="password" name="oldPass" className="input" />
                                <label htmlFor="">Old Password</label>
                                <span>Old Password</span>
                            </div>
                            <div className="input-container">
                                <input type="password" name="newPass" className="input" />
                                <label htmlFor="">New Password</label>
                                <span>Old Password</span>
                            </div>
                            <div className="input-container">
                                <input type="password" name="newPassConfirm" className="input" />
                                <label htmlFor="">Confirm new Password</label>
                                <span>Old Password</span>
                            </div>
                        </div>
                        
                        <div className = "formButtons">
                            <div className="input-container">
                                <i className="far fa-save"></i>
                                <input type='submit' className='formButtonSolid' id="saveNewPassword" value='Save New Password'/>  
                            </div>
                            <div className="input-container">
                                <i className="fas fa-arrow-left"></i> 
                                <input type='reset' className='formButtonTransparent' id="cancelPassword" value='Cancel'/>  
                            </div>
                            <div className="input-container">
                                <i className="fas fas fa-undo-alt"></i> 
                                <input type='button' className='formButtonText' id="forgetPassword" value='Forget Password ?'/>  
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


export default EditPassword;