import React, { Component } from 'react'
import EditNameAndContact from '../setting_elements/GeneralInfoSettingsElements/changeNameAndContact'
import EditProfileImage from '../setting_elements/GeneralInfoSettingsElements/changeProfilImage'

class GinfoSettings extends Component{
    componentDidMount(){
    
    }


    render(){
        

        return (

            <div className="setting-element">
            <a href="#" className='settingButton'><span>Edit Profile</span> <i className="far fa-user"></i></a>
            <div className="settingsFormHidden setForm" id="settingsForm">
                <div className="editing-form">
                    <div className="settingEdit">
                            <EditNameAndContact/>
                            <EditProfileImage/>
                    </div>
                </div>
            </div>
            </div>
        
                )
      }
        }


export default GinfoSettings;