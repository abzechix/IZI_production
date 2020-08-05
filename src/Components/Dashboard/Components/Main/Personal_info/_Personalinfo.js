import React, { Component } from 'react'
import ListSettings from './components/Pinfo_list_settings'
import PersonalInfoView from './InfoView';

class PersonalInfo extends Component{

    componentDidMount(){
        const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

    }

    render(){
        return (
          <div className="settings">
          <PersonalInfoView/>
          <ListSettings />
          </div>
                )
      }
        }


export default PersonalInfo;

