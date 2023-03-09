// Firebase documentations
// https://firebase.google.com/docs/web/setup?authuser=3
// https://firebase.google.com/docs/auth/web/google-signin?authuser=3

import { GoogleAuthProvider, getAuth, signInWithPopup, getAdditionalUserInfo } from "firebase/auth";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// handle google login
const googleAuth = () => {
    const provider = new GoogleAuthProvider();
    // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    const auth = getAuth();
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            const additionalUserInfo = getAdditionalUserInfo(result);
            console.log("user info", user);
            // console.log("additionalUserInfo", additionalUserInfo);
            // console.log("token", token);
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            console.log("error code: ", errorCode);
            const errorMessage = error.message;
            console.log("error message: ", errorMessage);
            // The email of the user's account used.
            const email = error.customData.email;
            console.log("email: ", email);
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log("credential: ", credential);
        });
}

export const GoogleLogin = () => {
    return (
        <div>
            <button onClick={googleAuth}>Login with Google</button>
        </div>
    )
}
