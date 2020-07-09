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
import { connect } from 'react-redux';


function App(props) {
  return (
    <div className="min-h-screen bg-green-500">
      <Router>
    { props.user }
      <Menubar>

        <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/registration">
              <Registration />
            </Route>
            <PrivateRoute path="/dashboard" currentUser={props.user}>
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/items" currentUser={props.user}>
              <Items />
            </PrivateRoute>
            <PrivateRoute path="/invoice" currentUser={props.user}>
              <Invoice />
            </PrivateRoute>
            <PrivateRoute path="/invoice" currentUser={props.user}>
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

const mapStateToProps = (state) => {
  return{
    user: state.email
  }
}

export default connect(mapStateToProps, null)(App);
