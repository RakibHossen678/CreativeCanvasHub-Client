import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const GithubProvider = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const crateUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const githubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, GithubProvider);
  };
  const facebookLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  };
  const logOut = () => {
    setLoading(true);
    signOut(auth);
  };
  const updateUserProfile = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  useEffect(() => {
    const UnSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail=currentUser?.email || user?.email
      const loggedUser={email:userEmail}
      setUser(currentUser);
      setLoading(false);
      //if use exists the issue token
      if (currentUser) {
        
        axios.post('http://localhost:5000/jwt',loggedUser,{withCredentials:true})
        .then(res=>{
          console.log('token response',res.data)
        })
      }
      else{
        axios.post('http://localhost:5000/logout',loggedUser,{withCredentials:true})
        .then(res=>{
          console.log(res.data)
        })
      }
    });
    return () => {
      UnSubscribe();
    };
  }, []);
  console.log(user);

  const AuthInfo = {
    user,
    crateUser,
    loginUser,
    googleLogin,
    githubLogin,
    facebookLogin,
    logOut,
    loading,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
