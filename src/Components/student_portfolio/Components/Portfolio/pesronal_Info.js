import React, { Component } from 'react'
import PhotoCv from '../../img/photo_CV.png'

class PersonalInfo extends Component{
    render(){
        return (
            <section class="section-student intro" id="home">
            <h1 class="section__title section__title--intro">
                Hi, I am <strong>Abderrahim</strong>
            </h1>
            <p class="section__subtitle section__subtitle--intro">Web Developper</p>
            <img src={PhotoCv} alt="Abderrahim ZEGHICHI" class="student-img intro__img"></img>
            </section>
                )
      }
    
        }


export default PersonalInfo;


