import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';

import Welcome from './components/welcome/Welcome';
import Login from './components/authentication/login/Login';
import Registration from './components/authentication/registration/registration';
import Dashboard from './components/dashboard/Dashboard';
import Menubar from './components/menubar/Menubar';
import Items from './components/items/Items';
import { PrivateRoute } from './hooks/useAuth';
import Invoice from './components/invoice/Invoice';


function App() {
  return (
    <div className="min-h-screen bg-green-500">
      <Router>

      <Menubar>

        <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/registration">
              <Registration />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/items">
              <Items />
            </PrivateRoute>
            <PrivateRoute path="/invoice">
              <Invoice />
            </PrivateRoute>
            <PrivateRoute path="/invoice">
              <Invoice />
            </PrivateRoute>
            <Route path="/" exact>
              <Welcome/>
            </Route>
        </Switch>
        </Menubar>
      </Router>     
    </div>
    
  );
}

export default App;
