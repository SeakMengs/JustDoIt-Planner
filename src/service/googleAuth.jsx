import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, getAdditionalUserInfo } from "firebase/auth";

// Your firebase config
import { firebaseConfig } from "./firebase.jsx"

// Initialize Firebase
initializeApp(firebaseConfig)

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
            // console.log("error message: ", errorMessage);
            // The email of the user's account used.
            const email = error.customData.email;
            // console.log("email: ", email);
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // console.log("credential: ", credential);
        });
}

export const GoogleLogin = () => {
    return (
        <div className='flex items-center bg-white-theme-1 shadow-sm shadow-black hover:bg-dark-theme-2 hover:border-dark-theme-2  dark:hover:border-white-theme-1 dark:shadow-white dark:shadow-sm dark:bg-dark-theme-2 px-4 py-1 border rounded-2xl dark:hover:bg-white-theme-1  hover:text-white  dark:hover:text-dark-theme-3  dark:text-white'>
            <span className='font-bold' onClick={googleAuth}>Login</span>
        </div>
    )
}
