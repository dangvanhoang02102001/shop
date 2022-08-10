import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import React from "react";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import classes from "./LoginForm.module.scss";

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  signInSuccessUrl: '/',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
};

const LoginForm = () => {

  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>Login</div>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
};

export default LoginForm;
