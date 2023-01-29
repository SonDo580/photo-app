import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

// Configure FirebaseUI.
const uiConfig = {
  signInFlow: "redirect",
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  signInSuccessUrl: "/photos",
};

function SignIn() {
  return (
    <div className="text-center">
      <h2>Login Form</h2>
      <p>or login with social accounts</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}

export default SignIn;
