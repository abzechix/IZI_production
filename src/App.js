import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';


// import IziSite from './Components/PublicWebsite/_IziSIte';
import Dashboard from './Components/Dashboard/_dashboard';

class App extends Component { 
  
  render(){
    return(
      <Router>
        <div className="App">
          <Dashboard />
        </div>
      </Router>
    )
  }
}

export default App;
