import React, { Component } from 'react'
import './styles/MainStyles.css'
import PersonalInfo from './Personal_info/_Personalinfo'


class Main extends Component{

    componentDidMount(){
        const settings =  document.querySelector("#settingList")
        const profile =   document.querySelector("#preview")
        const openPrv = document.getElementById('openPreview')
        const clsPrv = document.getElementById('closePreview')
        
        function displayEverything(x) {
            if (x.matches) { 
            clsPrv.style.display = 'none';
            openPrv.style.display = 'none';
            profile.style.width = '100%'
            }else{
                clsPrv.style.display = 'none';
                openPrv.style.display = 'block';
                profile.style.width = '0%'
            }
          }
          
          var x = window.matchMedia("(min-width: 1000px)")
          displayEverything(x) 
          x.addListener(displayEverything) 

          const openPreview = ()=>{
            profile.style.width = "100%";
            clsPrv.style.display = 'block';
            openPrv.style.display = 'none';    
                 
        }
        const closePreview = ()=>{
            profile.style.width = "0%";
            clsPrv.style.display = 'none';
            openPrv.style.display = 'block';     
        }

        openPrv.addEventListener('click', openPreview)
        clsPrv.addEventListener('click', closePreview)
            }
        
    
    render(){
        return (
            <div className="settingsGrid" id="Main">
                <a href='#' className="settingsBtnTransparent showPreview" id="openPreview"> <i className="far fa-eye" > Preview Edits</i></a>
                <a href='#' className="settingsBtnTransparent showPreview"  id="closePreview" > <i className="fas  fa-eye"> Continue Editing</i></a>
                <PersonalInfo />
            </div>
                )
      }
        }


export default Main;