import React from 'react';
import { Switch, Route } from 'react-router-dom';


import { Home } from './pages/Home'



function App() {
  return (
    
    <div className="App">

      <Switch>
        
        <Route component={ Home } path='/'/>
      </Switch>
    </div>
  );
}

export default App;
