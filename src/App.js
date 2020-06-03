import React from 'react';
import NavTop from './components/navigation/NavTop'
import FootBottom from './components/footer/FootBottom'
import Home from './components/pages/home'

function App() {
  return (
    <React.Fragment>
      <NavTop />
      <Home />

      <FootBottom />
    </React.Fragment>
  );
}

export default App;
