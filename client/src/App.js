import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';

import NavBar from './components/navBar';
import Home from './components/home';
import Rooms from './components/rooms';
import SingleRoom from './components/singleRoom'
import NotFound from './components/pageNotFound'


function App() {
  return (
    <div className="App">
        <NavBar />  
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/rooms' component={Rooms} />
          <Route exact path='/room-details' component={SingleRoom}/>
          <Route component = {NotFound} />
        </Switch>
        
    </div>
  );
}

export default App;
