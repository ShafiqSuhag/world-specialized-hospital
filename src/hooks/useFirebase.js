import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useState } from "react";
import firebaseInit from "../firebase/firebase.init";
// firebaseInit()


firebaseInit()
const useFirebase = () => {





    // firebaseInit()
    const [user, setUser] = useState({});
    // const [userEmail, setUserEmail] = useState({});
    // const [userPassword, setUserPassword] = useState({});
    const [error, setError] = useState("");


    const auth = getAuth();

    // provider 
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // signup by emial-password
    const signUpUsingEmailPassword = (userEmail, userPassword) => {
        console.log('inside -register ')
        return createUserWithEmailAndPassword(auth, userEmail, userPassword)
    }
    // signin by emial-password
    const signInUsingEmailPassword = (userEmail, userPassword) => {
        console.log('inside -signInUsingEmailPassword ')
        return signInWithEmailAndPassword(auth, userEmail, userPassword)
    }



    // google 
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)

    }
    

    




    // ************************** UPDATE 
    const updateProfileInfo = (displayName ) => {

        updateProfile(auth.currentUser, {
            displayName: displayName, photoURL: "./images/profile-img.jpg"
        }).then(() => {
            // Profile updated!
            console.log(' Profile updated!')
            // ...
        }).catch((error) => {
            // An error occurred
            console.log(' Profile update error X', error)
            // ...
        });
    }
    
    // ************************** UPDATE /


    // signout 
    const lotOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({})
        }).catch((error) => {
            // An error happened.
        });
    }

    // observer 
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user)
        } else {
            // setUser({})
        }
    });
    // observer 

    return {
        user,
        error,
        setError,
        signUpUsingEmailPassword,
        signInUsingEmailPassword,
        updateProfileInfo, 
        signInUsingGoogle,
        lotOut

    }
}

export default useFirebase