import React, { useState, useEffect } from 'react';
import * as firebase from "firebase/app";
import 'firebase/auth';
import firebaseConfig from '../firebase.config';


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

export function PrivateRoute({ children}, currentUser=null) {

    return (
      <Route
        
        render={({ location }) =>
          currentUser !== null ? (
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
  
    return {
        email: user.email
    }
}

const Auth = (props) => {
    const [user, setUser] = useState(null);
    

    const provider = new firebase.auth.GoogleAuthProvider();


    const signInWithGoogle = () => {
        return firebase.auth().signInWithPopup(provider)
            .then(res => {

                const signedInUser = getUser(res.user);
                setUser(signedInUser)
                return signedInUser;
            })
            .catch(err=>{
                console.log(err);
                setUser(null);
                return err.message;
            })

    }
    
    const signUpWithPassword = (email, password) => {
      
        return firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(res => {
                  const signedInUser = getUser(res.user);
                  setUser(signedInUser);
                  localStorage.setItem("invoice-user", true);
                  return signedInUser;
              })
              .catch(err=>{
                  console.log(err);
                  setUser(null)
                  return err.message;
              })
      }
  
      const signInWithPassword = (email, password) => {
        return firebase.auth().signInWithEmailAndPassword(email, password)
                .then(res => {
  
                  const signedInUser = getUser(res.user);
                  setUser(signedInUser);
                  localStorage.setItem("invoice-user", true);
                  return signedInUser;
              })
              .catch(err=>{
                  console.log(err);
                  setUser(null);
                  return err.message;
              })
      }
  
      const signOut = () => {
          return firebase.auth().signOut().then(function() {
              console.log("signed out success")
              localStorage.removeItem("invoice-user");
              setUser(null);
            })
            .catch(function(error) {
              console.log(error.message)
          });
      }
  
      useEffect(() => {
          firebase.auth().onAuthStateChanged(function(user) {
              if (user) {
                  const currentUser = getUser(user);
                  setUser(currentUser);
              } else {
                // No user is signed in.
              }
            });
      },[])
  
      return {
          user,
          signInWithGoogle,
          signUpWithPassword,
          signInWithPassword,
          signOut
      }
  }


  
  

export default Auth;
  




