import React from "react";
import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'; 

const firebaseUIConfig = {
  signInOptions: [ 
    { provider: EmailAuthProvider.PROVIDER_ID, requiredDisplayName: true },
    GoogleAuthProvider.PROVIDER_ID
  ],
  signInFlow: 'popup', 
  credentialHelper: 'none', 
  callbacks: { 
    signInSuccessWithAuthResult: () => {
      return false; 
    }
  }
}

export function SignInPage(props) {
  return(
      <StyledFirebaseAuth className='authentication-page' uiConfig={firebaseUIConfig} firebaseAuth={getAuth()}/>
  )
}