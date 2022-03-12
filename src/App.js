import React from 'react';
import './App.css';
import Cv1 from './Components/cv1'
import {BrowserRouter as Router, Route} from 'react-router-dom'

class App extends React.Component{

  render(){
    return(
          <div>
        
                 <Router>
                        <Route path="/Cv1" component={Cv1} />
                 </Router>
          </div>
    )
  }

}


export default App;
