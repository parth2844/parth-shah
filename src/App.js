import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavTop from './components/navigation/NavTop'
import FootBottom from './components/footer/FootBottom'
import Home from './components/pages/home'
import Skills from './components/pages/skills'
import Error from './components/pages/error'
import Experience from './components/pages/experience'
import Projects from './components/pages/projects'

function App() {
  return (
    <Router>    
      <NavTop />   
      <Switch>
        <Route path="/parth-shah" exact component={Home} />
        <Route path="/parth-shah/experience" exact component={Experience} />        
        <Route path="/parth-shah/skills" exact component={Skills} />
        <Route path="/parth-shah/projects" exact component={Projects} />
        <Route component={Error} />
      </Switch>
      <FootBottom />    
    </Router>
  );
}

export default App;
