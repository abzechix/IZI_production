import React, { Component } from 'react'
import {Link} from 'react-router-dom'


class Navbar extends Component{
    componentDidMount(){
            function showMenu(){
                let main = document.querySelector('#Main')
                main.classList.toggle('settingsGrid')
                main.classList.toggle('settingsGridHidden')                
            }

            document.getElementById('check').addEventListener('click', showMenu)
         }
    render(){
        return (  
            <header className="dash_header">
                <div className="container">
                    <input type="checkbox" name="" id="check" ></input>
                    
                    <div className="logo-container" id = "logoNav">
                        <h3 className="logo">ABZE<span>chiX</span></h3>
                    </div>

                    <div className="nav-btn">
                        <div className="nav-links">
                            <ul>
                                <li className="nav-link" >
                                    <Link to="/My_Portfolio">View Website</Link>
                                </li>
                                <li className="nav-link" >
                                    <Link to="/Dashboard/page_not_made_yet">Publish</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="log-sign" >
                            <Link to="/" className="btn off transparent off">Log out</Link>
                            <Link to="/Dashboard/page_not_made_yet" className="btn solid">Discover</Link>
                        </div>
                    </div>

                    <div className="hamburger-menu-container" onClick = {this.showMenu}>
                        <div className="hamburger-menu">
                            <div></div>
                        </div>
                    </div>
                </div>
            </header>
                )
      }
        }


export default Navbar;

