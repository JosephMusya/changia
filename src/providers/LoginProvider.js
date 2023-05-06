import { useState, useEffect, createContext } from 'react';
import {auth} from '../config/firebase/Firebase';

export const AuthContext = createContext();

export const AuthProvider = props =>{
    const [currentUser, setCurrentUser] = useState(null); 
    // setCurrentUser(auth.currentUser)
    useEffect(()=>{
        // setCurrentUser(auth.currentUser);        
        auth.onAuthStateChanged(setCurrentUser)        
    },[]); 
    return (
        <AuthContext.Provider value={currentUser}>
            {props.children}
        </AuthContext.Provider>
    )
}
