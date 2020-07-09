import React, { useState, useEffect } from 'react';
import * as firebase from "firebase/app";
import 'firebase/auth';
import firebaseConfig from '../firebase.config';
import { connect } from 'react-redux';
import { setAuthUser } from '../redux/actions/authActions';


import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect,
    useHistory,
    useLocation
  } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);


export function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          true ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }


  const getUser = user => {
    const { displayName, email, photoURL } = user;
    return {
        name: displayName,
        email,
        photo: photoURL
    }
}

const Auth = (props) => {
    // const [user, setUser] = useState(null);
    
    const provider = new firebase.auth.GoogleAuthProvider();
    
    const signUpWithPassword = (email, password) => {
        return firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(res => {
  
                  const signedInUser = getUser(res.user);
                  // setUser(signedInUser);
                  props.setAuthUser(signedInUser);
                  localStorage.setItem("invoice-user", true);
                  return res.user;
              })
              .catch(err=>{
                  console.log(err);
                  props.setAuthUser(null)
                  return err.message;
              })
      }
  
      const signInWithPassword = (email, password) => {
        return firebase.auth().signInWithEmailAndPassword(email, password)
                .then(res => {
  
                  const signedInUser = getUser(res.user);
                  props.setAuthUser(signedInUser);
                  localStorage.setItem("invoice-user", true);
                  return res.user;
              })
              .catch(err=>{
                  console.log(err);
                  props.setAuthUser(null)
                  return err.message;
              })
      }
  
      const signOut = () => {
          return firebase.auth().signOut().then(function() {
              console.log("signed out success")
              localStorage.removeItem("hot-onion-user");
              props.setAuthUser(null);
            })
            .catch(function(error) {
              console.log(error.message)
          });
      }
  
      useEffect(() => {
          firebase.auth().onAuthStateChanged(function(user) {
              if (user) {
                  const currentUser = getUser(user);
                  props.setAuthUser(currentUser);
              } else {
                // No user is signed in.
              }
            });
      },[])
  
      return {
          signUpWithPassword,
          signInWithPassword,
          signOut
      }
  }


  

const mapDispatchToProps = {
    setAuthUser
}
  
export default connect(null, mapDispatchToProps)(Auth);
  




