import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Dashboard from './Components/Dashboard/_dashboard';
import IziSite from './Components/PublicWebsite/_IziSIte';
import StudentPortfolio from './Components/student_portfolio/_student_portfolio';

class App extends Component { 
  
  render(){
    return(
        <Router>
          <div className="App">
            <Switch>
              <Route exact path= '/' component={IziSite}/>
              <Route path= '/Dashboard' component={Dashboard}/>
              <Route  path= '/My_Portfolio' component={StudentPortfolio}/>
            </Switch>
          </div>
        </Router>
        
      
    )
  }
}

export default App;
