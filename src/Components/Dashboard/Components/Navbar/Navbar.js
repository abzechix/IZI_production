import React, { Component } from 'react'


class Navbar extends Component{
    componentDidMount(){
            function showMenu(){
                console.log('hey')
                let main = document.getElementById('Main')
                main.classList.toggle('settingsGrid')
                main.classList.toggle('settingsGridHidden')                
            }

            document.getElementById('check').addEventListener('click', showMenu)
         }
    render(){
        return (  
            <header>
            
                <div className="container">
                    <input type="checkbox" name="" id="check" ></input>
                    
                    <div className="logo-container" id = "logoNav">
                        <h3 className="logo">Brand<span>Name</span></h3>
                    </div>

                    <div className="nav-btn">
                        <div className="nav-links">
                            <ul>
                                <li className="nav-link" >
                                    <a href="#">Home</a>
                                </li>
                                <li className="nav-link" >
                                    <a href="#">About</a>
                                </li>
                            </ul>
                        </div>

                        <div className="log-sign" >
                            <a href="#" className="btn transparent">Log out</a>
                            <a href="#" className="btn solid">Discover</a>
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

