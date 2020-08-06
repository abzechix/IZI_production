import React, { Component } from 'react'
import Photo1 from '../../img/huge(1).png'
import Photo2 from '../../img/huge(2).png'
import Photo3 from '../../img/huge(4).png'
import Photo4 from '../../img/huge.png'

class MyWork extends Component{
    render(){
        return (
            <section class="my-work" id="work">
            <h2 class="section__title section__title--work">My work</h2>
            <p class="section__subtitle section__subtitle--work">A selection of my range of work</p>
            
            <div class="portfolio">
                {/* <!-- Portfolio item 01 --> */}
                <a href="portfolio-item.html" class="portfolio__item">
                    <img src={Photo1} alt="" class="portfolio__img"></img>
                </a>
                
                {/* <!-- Portfolio item 02 --> */}
                <a href="portfolio-item.html" class="portfolio__item">
                    <img src={Photo2} alt="" class="portfolio__img"></img>
                </a>
                
                {/* <!-- Portfolio item 03 --> */}
                <a href="portfolio-item.html" class="portfolio__item">
                    <img src={Photo3} alt="" class="portfolio__img"></img>
                </a>
                
                {/* <!-- Portfolio item 04 --> */}
                <a href="portfolio-item.html" class="portfolio__item">
                    <img src={Photo4} alt="" class="portfolio__img"></img>
                </a>
                
            </div>
            </section>
                )
      }
    
        }


export default MyWork;