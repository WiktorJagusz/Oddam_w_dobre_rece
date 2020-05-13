import React from 'react';

import Home from './components/Home';
import Login from './components/Home/Login';
import { HashRouter,
         Route,
         Switch
         } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
        </Switch>
      </HashRouter>  
    </div>
  );
}

export default App;
