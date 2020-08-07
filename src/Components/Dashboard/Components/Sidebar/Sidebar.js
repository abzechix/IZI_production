import React, { Component } from 'react'
import {Link} from 'react-router-dom'
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
                
                <Link to="#" id="growSidebtn" onClick={swipe}>
                    <label htmlFor="growSide" onClick={swipeClick}></label>
                <i className="fa fa-angle-double-right fa-lg" aria-hidden="true" id="swipe"></i>
                </Link>
            
            <div className="sidebar-icons">
                <Link to="/Dashboard/personal_info"><i className="fa fa-user" aria-hidden="true"></i></Link>
                <Link to="/Dashboard/page_not_made_yet"><i className="fas fa-sliders-h"></i></Link> 
                <Link to="/Dashboard/page_not_made_yet"><i className="fas fa-palette"></i></Link>
                <Link to="/Dashboard/page_not_made_yet"><i className="fas fa-cogs"></i></Link>
                <Link to="/Dashboard/page_not_made_yet"><i className="fas fa-th"></i></Link>
                <Link to="/Dashboard/page_not_made_yet"><i className="far fa-edit"></i></Link>
                <Link to="/Dashboard/page_not_made_yet"><i className="far fa-question-circle"></i></Link>
                <Link to="/"><i className="fas fa-power-off off" ></i></Link> 
            </div>
            
        </div>

        <div className="bottomsidebar">
            <div id= "sideLogo" className="logo-container logo-down">
            <h3 className="logo">ABZE<span>chiX</span></h3>
            </div> 
               <center>
            <img src={userImg} className="profile_image" alt=""></img>
            <h4>Abderrahim</h4>
            </center>
            <Link to="/Dashboard/personal_info"><span>Personal Information</span></Link>
            <Link to="/Dashboard/page_not_made_yet"><span>IZISite Settings</span></Link>
            <Link to="/Dashboard/page_not_made_yet"><span>Theme and Style</span></Link>
            <Link to="/Dashboard/page_not_made_yet"><span>Website Components</span></Link>
            <Link to="/Dashboard/page_not_made_yet"><span>Componen placing</span></Link>
            <Link to="/Dashboard/page_not_made_yet"><span>Website Content</span></Link>
            <Link to="/Dashboard/page_not_made_yet"><span>Help?</span></Link>
            <Link to="/"><span className ="off">Log Out</span></Link>
        </div>
    </div>    
            
                )
      }
        }


export default Sidebar;

