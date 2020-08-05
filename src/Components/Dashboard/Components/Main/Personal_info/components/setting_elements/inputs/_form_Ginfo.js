import React, { Component } from 'react'

class FormSetting extends Component{

    render(){
        return (
          <div className="editing-form">
          <div className="settingEdit">
                <EditNameAndContact/>
                <EditProfileImage/>
          </div>
        </div>
                )
      }
        }


export default FormSetting;