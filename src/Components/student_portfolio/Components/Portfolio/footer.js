import React, { Component } from 'react'

class Footer extends Component{
    render(){
        return (
            <footer class="footer">
            <p class="section__subtitle section__subtitle--footer">I am atcually looking for internship anywhere in France, If you are an employer contact me here: </p>

            <a href="mailto:hello@jane.dev" class="footer__link">abderrahimzeghichi@gmail.com</a>
            <ul class="social-list">
                <li class="social-list__item">
                    <a class="social-list__link" href="https://codepen.io">
                        <i class="fab fa-codepen"></i>
                    </a>
                </li>
                <li class="social-list__item">
                    <a class="social-list__link" href="http://dribbble.com">
                        <i class="fab fa-dribbble"></i>
                    </a>
                </li>
                <li class="social-list__item">
                    <a class="social-list__link" href="https://twitter.com">
                        <i class="fab fa-twitter"></i>
                    </a>
                </li>
                <li class="social-list__item">
                    <a class="social-list__link" href="https://github.com">
                        <i class="fab fa-github"></i>
                    </a>
                </li>
            </ul>
            </footer>
                )
      }
    
        }


export default Footer;