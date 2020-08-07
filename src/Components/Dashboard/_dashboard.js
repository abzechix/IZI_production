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
            {
            swipebtn.classList.toggle('swipe');
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
        let check = document.getElementById('growSide');
        check.checked = true
        document.getElementById('content').addEventListener('click', function closeSwipedSide() {
            let swipebtn = document.getElementById('swipe');
            if (swipebtn.classList.contains('swipe')){
            let logo = document.getElementById('sideLogo');
            let logoNav = document.getElementById('logoNav');
            let content = document.getElementById('content');
            check.click();
            swipebtn.classList.remove('swipe');
            swipebtn.classList.add('swipe-close');
            logoNav.classList.remove('offLogo');
            logoNav.classList.add('onLogo');
            logo.parentNode.replaceChild(logo, logo);
            content.classList.remove('contentClosed');
            content.classList.add('contentSwiped');}
        })
         }


    render(){
        return (
            
                <div className ='dashboard'>
                    <Navbar/>
                    <Sidebar swipe={this.swipe} clickSwipe={this.clickSwipe}/>
                    <main className="content-dash" id="content">
                        <section>
                            <div>
                                <Switch>
                                    <Route path='/Dashboard/personal_info' component={Main} />
                                    <Route path='/Dashboard/page_not_made_yet' component={Page404} />
                                </Switch>
                            </div>
                        </section>
                    </main>
                </div>
            
            
                )
      }
        }


export default Dashboard;

