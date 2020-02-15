import React from 'react';
import Login from "./components/login/Login";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard';
import User from './components/users/User';
import Module from './components/modules/Module'
import './App.css'
import TopBar from './components/navbars/topBar'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <TopBar />
          <Switch>
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/user' component={User} />
            <Route path='/module' component={Module} />
            <Route path='/' component={Login} />
          </Switch>
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
