import { useEffect } from "react";
import { useState } from "react";
import FirbaseInitizedApp from "../firebase/FirebaseInitializedApp";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";

FirbaseInitizedApp();
const Usefirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const auth = getAuth();

  //    newUSER
  const newUser = (name, email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //    oldUSER
  const OldUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   logout
  const Logout = () => {
    signOut(auth)
      .then(() => {
        setUser({});
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  //   sign with google
  const SignWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  //   updateuser

  const updateUser = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        setUser(auth.currentUser);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  //   observer
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
  }, [auth]);

  return {
    newUser,
    error,
    user,
    OldUser,
    Logout,
    SignWithGoogle,
    updateUser,
    setError,
    setUser,
  };
};

export default Usefirebase;
