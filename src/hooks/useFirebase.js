import { getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import firebaseInit from "../firebase/firebase.init";
// firebaseInit()


firebaseInit()
const useFirebase = () => {

    // firebaseInit()
    const [user, setUser] = useState({});
    const [error, setError] = useState("");


    const auth = getAuth();

    // provider 
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // google 
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
            
    }
    // github
    const signInUsingGithub = () => {
        console.log('signInUsingGithub')
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                console.log('user - ', result.user)
                setUser(result.user)
                setError('')
            }).catch((error) => {
                console.log(error.message)
                setError(error.message)
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


    return {
        user,
        error,
        signInUsingGoogle,
        signInUsingGithub,
        lotOut

    }
}

export default useFirebase