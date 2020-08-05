import React, { Component } from 'react'

class EditNameAndContact extends Component{

    render(){
        return (
            <div className="sub-setting-element">
            <a href="#" className='sub-settingButton'><span>Name and Contact</span><i className="far fa-id-card"></i> </a> 
            <div className="settingsFormHidden subSetForm" id="subSettingsForm">
                    <div className="editing-form">
                <div className="settingEdit">
                    <form action="index.html" autoComplete="off" className="editform">
                        <div className = "formInputs">
                            <div className="input-container">
                                <input type="text" name="newName" className="input" />
                                <label htmlFor="">Full Name</label>
                                <span>Full Name</span>
                            </div>
                            <div className="input-container">
                                <input type="tel" name="newPhone" className="input" />
                                <label htmlFor="">Phone Number</label>
                                <span>Phone Number</span>
                            </div>
                            <div className="input-container">
                                <input type="email" name="newContactMail" className="input" />
                                <label htmlFor="">Contact Email</label>
                                <span>Contact Email</span>
                            </div>
                            <div className="input-container">
                                <input type="text" name="newUserName" className="input" />
                                <label htmlFor="">Adress</label>
                                <span>Adress</span>
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


export default EditNameAndContact;