import React from 'react';

import Home from './components/Home'
import { HashRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Home exact path='/' component={Home}/>
      </HashRouter>  
    </div>
  );
}

export default App;
