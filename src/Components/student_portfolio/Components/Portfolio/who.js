import React, { Component } from 'react'
import longPhoto from '../../img/long_photo.jpg'

class AbooutMe extends Component{
    render(){
        return (
            <section class="section-student about-me" id="about">
           <h2 class="section__title section__title--about">Who I am</h2>
           <p class="section__subtitle section__subtitle--about">Computer science Master student</p>
           
           <div class="about-me__body">
               <p>Active and versatile learner, as a short answer</p>
               <p>Web designer and developer based actually in Paris, France. I create custom websites for individuals, organisations or companies to help help do better online.</p>
           </div>
           
           <img src={longPhoto} alt="Jane leaning against a bus" class="student-img about-me__img"></img>
        </section>
                )
      }
    
        }


export default AbooutMe;
        