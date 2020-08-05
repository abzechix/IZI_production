import React, { Component } from 'react'
import userImg from '../../img/male_user.svg'

class Sidebar extends Component{    
    
    componentDidMount(){
         }

    render(){

    const swipe = this.props.swipe
    const swipeClick = this.props.swipe

        return (  
            
    <div className="">
        <input type="checkbox" id="growSide"></input>
        <div className="sidebar">
                
                <a href="#" id="growSidebtn" onClick={swipe}>
                    <label htmlFor="growSide" onClick={swipeClick}></label>
                <i className="fa fa-angle-double-right fa-lg" aria-hidden="true" id="swipe"></i>
                </a>
            
            
            <center>
            <img src="" className="profile_image" alt=""></img>
            <h4>Name</h4>
            </center>
            <a href="/"><i className="fa fa-user" aria-hidden="true"></i></a>
            <a href="/page_not_made_yet"><i className="fas fa-sliders-h"></i></a> 
            <a href="/page_not_made_yet"><i className="fas fa-palette"></i></a>
            <a href="/page_not_made_yet"><i className="fas fa-cogs"></i></a>
            <a href="/page_not_made_yet"><i className="fas fa-th"></i></a>
            <a href="/page_not_made_yet"><i className="far fa-edit"></i></a>
            <a href="/page_not_made_yet"><i className="far fa-question-circle"></i></a>
            <a href="/page_not_made_yet"><i className="fas fa-power-off off" ></i></a> 
        </div>

        <div className="bottomsidebar">
            <div id= "sideLogo" className="logo-container logo-down">
                <h3 className="logo">
                    Brand<span>Name</span>
                </h3>
            </div> 
               <center>
            <img src={userImg} className="profile_image" alt=""></img>
            <h4>BARIZA</h4>
            </center>
            <a href="/"><span>Personal Information</span></a>
            <a href="/page_not_made_yet"><span>IZISite Settings</span></a>
            <a href="/page_not_made_yet"><span>Theme and Style</span></a>
            <a href="/page_not_made_yet"><span>Website Components</span></a>
            <a href="/page_not_made_yet"><span>Componen placing</span></a>
            <a href="/page_not_made_yet"><span>Website Content</span></a>
            <a href="/page_not_made_yet"><span>Help?</span></a>
            <a href="/page_not_made_yet"><span className ="off">Log Out</span></a>
        </div>
    </div>    
            
                )
      }
        }


export default Sidebar;

