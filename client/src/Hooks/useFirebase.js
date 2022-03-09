import React, { useEffect, useState } from 'react';
import {
    getAuth,
    signOut,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    TwitterAuthProvider,
    FacebookAuthProvider
} from "firebase/auth";
import initializeAuthentication from '../firebase/firebase.initialize';

initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState(null)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();
    const twitterProvider = new TwitterAuthProvider();
    const facebookProvider = new FacebookAuthProvider()

    useEffect(() => {
        setLoading(true)
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                setLoading(false)
            }
            else {
                setLoading(false)
            }
        })
    }, [])










    const handleGoogleLogIn = () => { // ----------Google Log In----------
        return signInWithPopup(auth, googleProvider)
    }
    const handleTwitterLogIn = () => { // ---------Twitter Log In---------
        return signInWithPopup(auth, twitterProvider)
    }
    const handleFacebookLogIn = () => { //-----------Facebook Log In-----------
        return signInWithPopup(auth, facebookProvider)
    }


    const handleSignOut = () => { // -------sign out-------
        signOut(auth)
            .then(() => {
                setUser(null)
            })
            .catch(error => {
                setError(error.message)
            })
    }



    return {
        user,
        setUser,
        error,
        setError,
        loading,
        setLoading,
        handleSignOut,
        handleGoogleLogIn,
        handleTwitterLogIn,
        handleFacebookLogIn,
    }
};

export default useFirebase;