import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import {auth} from '../firebase_init.js'

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {


  const [user,setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)


  const createUser = (email,password) => {
  
 
    setIsLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)

    
    //update users profile
        
 }

 const updateUser = (name,photo)=>{
  const profile = {
      displayName : name,
      photoURL: photo
    }
    return updateProfile(auth.currentUser, profile)
    
 }


 const signInWithGoogle = ()=>{
  return signInWithPopup(auth,googleProvider)
 }

 
 const signInUser = (email,password)=>{
   setIsLoading(true)
   return signInWithEmailAndPassword(auth,email,password)
 }
 
 const signOutUser = ()=>{
  setIsLoading(true)
  return signOut(auth)

 }
 
 
 useEffect(()=>{
 
   const unSubscribe = onAuthStateChanged(auth,currenUser=>{
       
     //console.log("Current User : ",currenUser);
     setUser(currenUser)
     setIsLoading(false)
     
 
   })
 
   return ()=>{
     unSubscribe();
   }
   
 
 },[])
 




 const authInfo = {
    name: "rafi",
    user,
    setUser,
    isLoading,
    createUser,
    signInUser,
    signOutUser,
    signInWithGoogle,
    updateUser
 }


  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
