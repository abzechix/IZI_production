import React, { Component } from 'react'
import PersonalImageInput from '../inputs/PersonalImageInput'

class EditProfileImage extends Component{

    render(){
        return (
            <div className="sub-setting-element">
            <a href="#" className='sub-settingButton'><span>Edit Profile Image</span><i className="far fa-image"></i> </a>
            <div className="settingsFormHidden subSetForm" id="subSettingsForm">
                    <div className="editing-form"> 
                <div className="settingEdit">
                    <form action="index.html" autoComplete="off" className="editform">
                        <div className = "formInputs">
                                <PersonalImageInput/>
                        </div>
                        
                        <div className = "formButtons">
                            <div className="input-container">
                                <i className="far fa-save"></i>
                                <input type='submit' className='formButtonSolid' id="saveNewEmail" value='Save New Profile Picture'/>  
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


export default EditProfileImage;