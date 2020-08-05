import React, { Component } from 'react'
import choicesImage from './img/undraw_proud_self_1ddv.svg' 
import GinfoSettings from './listSettings/General_information_settings';
import FormAccountSettings from './setting_elements/_form_account_settings';
import AccountSettings from './listSettings/Account_settings';

class ListSettings extends Component{

          componentDidMount(){
        const settingBtns = document.querySelectorAll(".settingButton");
        const subSettingButton = document.querySelectorAll(".sub-settingButton");
        

        function toggleSetting (setting) {
          let form = setting.parentNode.querySelector("#settingsForm");
          //hide subsettings
          settingBtns.forEach((el)=>{
            if(el !== setting){
              el.parentNode.childNodes[1].classList.add('settingsFormHidden');
              el.classList.remove('settingsButtonClicked');
              el.classList.add('settingButton');}
          })

          //toggle click and show styles
          setting.classList.toggle ('settingsButtonClicked');
          setting.classList.toggle('settingButton')
          form.classList.toggle('settingsFormHidden');
          
          }

          function toggleSubSetting (subSetting) {
            let form = subSetting.parentNode.querySelector("#subSettingsForm");
            subSettingButton.forEach((el)=>{
              if(el !== subSetting){
                el.parentNode.childNodes[1].classList.add('settingsFormHidden');
                el.classList.remove('sub-settingButtonClicked');
                el.classList.add('sub-settingButton');
              }
            })
            subSetting.classList.toggle ('sub-settingButtonClicked');
            subSetting.classList.toggle('sub-settingButton')
            form.classList.toggle('settingsFormHidden');
        }

        settingBtns.forEach((input) => {
        input.addEventListener("click",function(){
          toggleSetting(input);
        }, false); 
        });
        subSettingButton.forEach((input) => {
          input.addEventListener("click",function(){
            toggleSubSetting(input);
          }, false); 
          });

        }

    render(){
        return (
        <div className="choices" id="settingList">
          <h3 className="title"> <i className="far fa-id-badge lg" id="profilEditIcon"> </i>Edit Your Profile</h3>
          <img className="image leftImg" src={choicesImage} alt=""></img>
          <div className="settingsList">
            <GinfoSettings/>
            <AccountSettings/>
          </div>
        </div>
                )
      }
        }


export default ListSettings;