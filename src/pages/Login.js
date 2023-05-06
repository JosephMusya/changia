import React from "react";
import styles from "./login.module.css";
import { MdEmail, MdLock, } from "react-icons/md";
import {FaGoogle} from 'react-icons/fa'
import {auth, googleProvider} from '../config/firebase/Firebase';
import {signInWithPopup,setPersistence,browserSessionPersistence} from 'firebase/auth';
import {useState} from 'react'

export default function Login() {

  const [loginStatus, setLoginStatus] = useState()

  console.log(auth?.currentUser?.email)
  const handleSignIn = async () => {
  }
  const signInWithGoogle = async () => {
    try {
      setPersistence(auth, browserSessionPersistence)
      .then(()=>{
        return signInWithPopup(auth,googleProvider)
      })      
    } catch (error) {
        console.log(error)
    }
  }
  
  return (
    <main className={styles.main}>
      <div className={styles.login}>
        <h1>Welcome to Bud-Changa</h1>
        <div className={styles.credentials}>
          <div>
            <MdEmail size={25} />
            <input type="email" name="email" id="1" placeholder="Email.." />
          </div>
          <div>
            <MdLock size={25} />
            <input
              type="password"
              name="password"
              id="2"
              placeholder="Password..."
            />
          </div>
          <br />
          <div>
            <button onClick={handleSignIn}>Login</button>
          </div>
          <br />
          <div className={styles.googleDiv}>
            <FaGoogle />
            <button className={styles.googleLogin} onClick={signInWithGoogle}>Use Google</button>
          </div>
        </div>
      </div>
    </main>
  );
}
