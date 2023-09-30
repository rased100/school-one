import React, { useEffect, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import initializeFirebase from "../pages/auth/firebase/firebase.init";

// initialize firebase app
initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");

  const auth = getAuth();

  //   login
  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        history.replace(destination);
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // observe user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(user);
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);

  // logout
  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {
    user,
    loginUser,
    logout,
    isLoading,
    authError,
  };
};

export default useFirebase;
