import React, {Component} from 'react' ;

import {BrowserRouter as Router, Route }from 'react-router-dom'

import DQ_RA from '../pages/DQ_RA'

import Links from '../pages/Links'

import { UserProvider } from "../context";

class App extends Component {
    
    render(){
       
        return(
            // <div>
                <Router>
                    <div className="App Site">
        <UserProvider>
          <div className="Site-content">
            <div className="App-header">
              {/* <Route component={MyNav} /> */}
            </div>
            <div className="main">
                {/* <UserProvider>
               <MyNav/> */}
                {/* <switch> */}
                     <Route path="/dq_ra" component={DQ_RA}/>
                     <Route path="/links" component={Links}/>
                {/* <Route component={NoMatch} /> */}
                {/* </switch> */}
                </div>
          </div>
      
        </UserProvider>
      </div>
    </Router>
        );
     
    }
};

export default App;