import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'

export const AuthContext = createContext();
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const fbProvider = new FacebookAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const googleSignIn = () => {
        setLoader(true);
        return signInWithPopup(auth, googleProvider);
    }
    const fbSignIn = () => {
        setLoader(true);
        return signInWithPopup(auth, fbProvider);
    }
    const signUp = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const setProfile = (profile) => {
        setLoader(true);
        return updateProfile(auth.currentUser, profile);
    }
    const emailVerification = () => {
        setLoader(true);
        return sendEmailVerification(auth.currentUser);
    }
    const signIn = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const forgetPassword = (email) => {
        setLoader(true);
        return sendPasswordResetEmail(auth, email);
    }
    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoader(false);
        })

        return () => {
            unsubscribe();
        }

    }, [])

    const authInfo = {
        user,
        loader,
        googleSignIn,
        fbSignIn,
        signUp,
        setUser,
        setProfile,
        emailVerification,
        signIn,
        forgetPassword,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;