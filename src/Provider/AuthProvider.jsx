import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext=createContext()
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const googleProvider = new GoogleAuthProvider();
    const GithubProvider = new GithubAuthProvider();

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

    const AuthInfo={
        user,
        crateUser,
        loginUser,
        googleLogin,
        githubLogin
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;