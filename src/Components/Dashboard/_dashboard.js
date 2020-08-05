import React, { Component } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './styles/dash.css';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Main from './Components/Main/_Main';
import Page404 from './Components/Main/__404_page';

class Dashboard extends Component{

    swipe = () => {
        let check = document.getElementById('growSide');
        let logoContainer = document.querySelector('.logo-container')
        check.click();
        let swipebtn = document.getElementById('swipe');
        let logo = document.getElementById('sideLogo')
        logo.parentNode.replaceChild(logo, logo);
        let logoNav = document.getElementById('logoNav')
        let content = document.getElementById('content')
        if (swipebtn.classList.contains('swipe')|| swipebtn.classList.contains('swipe-close')) 
            {swipebtn.classList.toggle('swipe');
            swipebtn.classList.toggle('swipe-close');
            logoNav.classList.toggle('offLogo');
            logoNav.classList.toggle('onLogo');
            logo.parentNode.replaceChild(logo, logo);
            content.classList.toggle('contentClosed');
            content.classList.toggle('contentSwiped');
        }
        else
        {
            swipebtn.classList.add('swipe');
            logoNav.classList.add('offLogo');
            logo.parentNode.replaceChild(logo, logo);
            content.classList.remove('content');
            content.classList.add('contentClosed');
        }
        console.log(logoContainer);
       

    }

    clickSwipe = ()=>{
        document.getElementById('growSide').click()
    }

    componentDidMount(){
        document.getElementById('growSide').checked = true
         }
    render(){
        return (
            <BrowserRouter>
                <div >
                    <Navbar/>
                    <Sidebar swipe={this.swipe} clickSwipe={this.clickSwipe}/>
                    <main className="content" id="content">
                        <section>
                            <div>
                                <Switch>
                                    <Route exact path='/' component={Main} />
                                    <Route path='/page_not_made_yet' component={Page404} />
                                </Switch>
                            </div>
                        </section>
                    </main>
                </div>
            </BrowserRouter>
            
                )
      }
        }


export default Dashboard;

