import React, { Component } from 'react'
import './styles/infoView.css'

class PersonalInfoView extends Component{
    componentDidMount(){

    }

    render(){
        return (
            
            <div className="container-profile" id='preview'>
            <div className="card-profile">
                <div className="header-profile">
                    <div className="main-profile">
                        <div className="image-profile">
                            <div className="hover-profile">
                                <i className="fas fa-camera fa-2x"></i>
                            </div>
                        </div>
                        <h3 className="name-profile">Full Name</h3>
                        <h3 className="sub-name-profile">@Username</h3>
                    </div>
                </div>
    
                <div className="contentProfileView">
                    <div className="left-profile">

                        <div className="top-profile">
                           
                            <div>
                                <h3 className="number-profile"><i className="fas fa-university"></i></h3>
                                <h3 className="number-title-profile">Student</h3>
                                <h3 className="number-title-profile">Université d'Angers</h3>
                            </div>

                            <div>
                                <h3 className="number-profile"><i className="fas fa-graduation-cap"></i></h3>
                                <h3 className="number-title-profile">BAC + 4</h3>
                                <h3 className="number-title-profile">Computer Science</h3>
                            </div>

                            <div>
                                <h3 className="number-profile"><i className="fas fa-briefcase"></i></h3>
                                <h3 className="number-title-profile">Web Developper</h3>
                                <h3 className="number-title-profile">Freelance</h3>
                            </div>
                            
                            <div>
                                <h3 className="number-profile"><i className="fas fa-certificate accent"></i></h3>
                                <h3 className="number-title-profile">Certified</h3>
                                <h3 className="number-title-profile">Website</h3>
                            </div>
                        </div>

                        <div className = 'inside-profile'>
                            <div className="about-container-profile">
                                <h3 className="title-profile">Bio</h3>
                                <p className="text-profile">
                                Lorem Ipsum is simply text of the printing and types industry. BIO CONTENT
                                Lorem Ipsum is simply text of the printing and types industry. BIO CONTENT
                                Lorem Ipsum is simply text of the printing and types industry. BIO CONTENT
                                </p>
                            </div>
                            <div className="about-container-profile">
                                <h3 className="title-profile">Sub Bio</h3>
                                <p className="text-profile">
                                Lorem Ipsum is simply text of the printing and types industry. BIO CONTENT
                                Lorem Ipsum is simply text of the printing and types industry. BIO CONTENT
                                </p>
                            </div>

                            <div className="about-container-profile">
                                <h3 className="title-profile">Find Me on Social Media</h3>
                            </div>

                            <div className="icons-container-profile">
                            <a href="#" className="icon-profile">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="#" className="icon-profile">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="icon-profile">
                                <i className="fab fa-google-plus-g"></i>
                            </a>
                            <a href="#" className="icon-profile">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </div>
                        <div className="buttons-wrap-profile">
                            <div className="follow-wrap-profile">
                                <a href="#" className="follow-profile">Share</a>
                            </div>
                            <div className="share-wrap-profile">
                                <a href="#" className="share-profile">CONTACT</a>
                            </div>
                        </div>
                    </div>
                    </div>
    
                    <div className="right-profile">
                        <div>
                                <h3 className="number-profile"><i className="fas fa-map-marker-alt"></i></h3>
                                <h3 className="number-title-profile">Angers</h3>
                        </div>

                        <div>
                            <h3 className="number-profile"><i className="fas fa-phone"></i></h3>
                            <h3 className="number-title-profile">06 66 56 55 69</h3>
                        </div>
                        <div>
                            <h3 className="number-profile"><i className="far fa-envelope"></i></h3>
                            <h3 className="number-title-profile">abderrahimzeghichi@gmail.com</h3>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        
                )
      }
        }


export default PersonalInfoView;