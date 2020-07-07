import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  useHistory,
  useLocation
} from 'react-router-dom';

import Login from './components/authentication/login/Login';
import Registration from './components/authentication/registration/registration';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './hooks/useAuth';

function App() {
  return (
    <div className="min-h-screen bg-green-500">
      <Router>
        
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
            <Route path="/" exact>
              
            </Route>
        </Switch>

      </Router>     
    </div>
    
  );
}

export default App;
