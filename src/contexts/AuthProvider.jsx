import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../FIrebase/firebase.config";

//!Auth Context provider
export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //! Third party authentication
  // Google 
  const googleProvider = new GoogleAuthProvider()
  // Google SignIn 
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)

  }

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password).catch(
      (error) => {
        // Handle error
        console.error("Error creating user:", error);
      }
    );
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password).catch((error) => {
      // Handle error
      console.error("Error signing in:", error);
    });
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth).catch((error) => {
      // Handle error
      console.error("Error logging out:", error);
    });
  };

  const updateUserProfile = (name, photoUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
    }).catch((error) => {
      // Handle error
      console.error("Error updating profile:", error);
    });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
      setLoading(false);
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    updateUserProfile,
    googleSignIn
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
