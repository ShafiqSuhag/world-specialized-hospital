import { getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useState } from 'react';
import firebaseInit from "../firebase/firebase.init";
// firebaseInit()

firebaseInit()

const useFirebase = () => {
    // firebaseInit()
    const [user, setUser] = useState({});
    const [error, setError] = useState('');


    const auth = getAuth();

    // provider 
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // google 
    const signInusingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(result.user)
                setUser(result.user)
            }).catch((error) => {
                setError(error.message)
            });
    }
    // github
    const signInusingGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                setUser(result.user)
            }).catch((error) => {
                setError(error.message)
            });
    }

    // observer 
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user)
        } else {
            setUser({})
        }
    });
    // observer 


    // signout 
    const lotOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }


    return {
        user,
        error,
        signInusingGoogle,
        signInusingGithub,
        lotOut

    }
}

export default useFirebase