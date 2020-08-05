import React, { Component } from 'react'
import EditPassword from '../setting_elements/accountSettingElements/changePassword';
import EditLoginMail from '../setting_elements/accountSettingElements/ChangeLoginMail';
import EditLoginUserName from '../setting_elements/accountSettingElements/changeUserName';


class AccountSettings extends Component{
    componentDidMount(){
    
    }


    render(){
        

        return (
        <div className="setting-element">
            <a href="#" className='settingButton'><span>Account Settings</span> <i className="fas fa-user-cog"></i></a>
            <div className="settingsFormHidden setForm" id="settingsForm">
                <div className="editing-form">
                    <div className="settingEdit">
                        <EditPassword/>
                        <EditLoginMail/>
                        <EditLoginUserName/>
                    </div>
                </div>
            </div>
        </div>
                )
      }
        }


export default AccountSettings;