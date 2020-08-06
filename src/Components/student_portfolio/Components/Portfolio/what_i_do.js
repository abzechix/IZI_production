import React, { Component } from 'react'

class Services extends Component{
    render(){
        return (
            <section class="my-services" id="services">
            <h2 class="section__title section__title--services">What I do</h2>
            <div class="services">
                <div class="service">
                    <h3>WEB</h3>
                    <p>I enjoy building everything from <highlight> small sites</highlight>  to rich and interactive <highlight>web apps</highlight>,
                    I worked with a diverse set of technologies, ranging from <highlight> HTML, CSS and JS </highlight> to <highlight> Php</highlight> and SQL or NoSQL <highlight>databases</highlight>  , and <highlight>frameworks</highlight>  as React.js, Django and Syfmony
                    </p>
                </div>
                 {/* <!-- / service --> */}
                
                <div class="service">
                    <h3>data & AI </h3>
                    <p>It's an exciting time for <highlight> DATA science </highlight> and <highlight>Machine Learning</highlight>. I'm working through several online classes, and personal projects Using <highlight>Python</highlight> and its libraries like Pandas, NumPy, SkitLearn, Keras and tensorFlow</p>
                </div> 
                {/* <!-- / service --> */}
            </div> 
            {/* <!-- / services --> */}
            
            <a href="#work" class="btn">My Work</a>
        </section>
                )
      }
    
        }


export default Services;
        