import React, { Component } from 'react'
import EditPassword from './accountSettingElements/changePassword';
import EditLoginMail from './accountSettingElements/ChangeLoginMail';
import EditLoginUserName from './accountSettingElements/changeUserName';

class FormAccountSettings extends Component{

    render(){
        return (
          <div className="editing-form">
          <div className="settingEdit">
            <EditPassword/>
            <EditLoginMail/>
            <EditLoginUserName/>
          </div>
        </div>
                )
      }
        }


export default FormAccountSettings;