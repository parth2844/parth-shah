import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavTop from './components/navigation/NavTop'
import FootBottom from './components/footer/FootBottom'
import Home from './components/pages/home'
import Error from './components/pages/error'

function App() {
  return (
    <Router>    
      <NavTop />   
      <Switch>
        <Route path="/parth-shah" exact component={Home} />        
        <Route component={Error} />
      </Switch>
      <FootBottom />    
    </Router>
  );
}

export default App;
