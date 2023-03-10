// Firebase documentations
// https://firebase.google.com/docs/web/setup?authuser=3
// https://firebase.google.com/docs/auth/web/google-signin?authuser=3

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
    // https://stackoverflow.com/questions/70883903/loading-env-variables-in-react-app-using-vite
    // Use your own firebase config for your project
    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId,
    measurementId: import.meta.env.VITE_measurementId 
};