import React, { Component } from 'react'
import photo1 from '../../img/portfolio-01.jpg'
import photo2 from '../../img/portfolio-details.jpg'

class ProjectDetails extends Component{
    render(){
        return (
            <div>
                <section class="intro">
                    <h1 class="section__title section__title--intro">
                        The title <strong>of my project</strong>
                    </h1>
                    <p class="section__subtitle section__subtitle--intro">A short subtitle</p>
                    <img src={photo1} alt="" class="intro__img"></img>
                </section>
        
                <div class="portfolio-item-individual">
                    <p>Voluptatibus, soluta blanditiis! Incidunt ea unde itaque illo molestiae eligendi sint culpa nobis voluptas sapiente voluptate, magnam ipsum eius earum?</p>
                    <img src={photo2} alt=""></img>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe et amet tenetur! Fugit sequi optio corrupti fugiat ducimus consequatur incidunt?</p>
                    <p>Voluptatibus, soluta blanditiis! Incidunt ea unde itaque illo molestiae eligendi sint culpa nobis voluptas sapiente voluptate, magnam ipsum eius earum?</p>
                </div>
            </div>
                )
      }
    
        }


export default ProjectDetails;