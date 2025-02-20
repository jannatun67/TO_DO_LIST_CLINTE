import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.confige";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();
    const [loading,setLoading] = useState(true)
    const [user,setUser] = useState(null)


    const googleLogin=()=>{
        return signInWithPopup(auth, provider)
    }

    const logOut=()=>{
        setLoading(true)
       return signOut(auth)
    }

    useEffect(() => {
        const subscribe = onAuthStateChanged(auth, (currentUser) => {
         setLoading(false)
         setUser(currentUser)
         console.log(currentUser)
        })
     
       return () => subscribe()
     }, [])
     
  const  userInfo={
    googleLogin,
    user,
    setUser,
    loading,
    logOut
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;