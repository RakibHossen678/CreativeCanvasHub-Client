import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext=createContext()
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const googleProvider = new GoogleAuthProvider();
    const GithubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const crateUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleLogin=()=>{
       return signInWithPopup(auth,googleProvider)
    }
    const githubLogin=()=>{
        return signInWithPopup(auth,GithubProvider)
    }
    const facebookLogin=()=>{
        return signInWithPopup(auth,facebookProvider)
    }

    useEffect(()=>{
        const UnSubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        })
        return()=>{
            UnSubscribe()
        }
    },[])
    console.log(user)

    const AuthInfo={
        user,
        crateUser,
        loginUser,
        googleLogin,
        githubLogin,
        facebookLogin
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;