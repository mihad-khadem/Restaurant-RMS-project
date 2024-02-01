import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile}  from "firebase/auth";
import { app } from "../FIrebase/firebase.config";

//!Auth Context provider
export const AuthContext = createContext(null) 
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    // User State 
    const [user, setUser] = useState(null)
    // Loading State
    const [loading, setLoading] = useState(true)

    // Create User 
    const createUser = (email, password) =>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password);
    }
    // User Login/SignIn
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // User Logout
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    // Update User Profile
    const updateUserProfile = (name, photoUrl) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoUrl
        })
    }

    useEffect(() => {
       const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('current user :' , currentUser);
            setLoading(false)
        })
        return () => {
            return unSubscribe()
        }
    }, [])
    // Auth Info 
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;