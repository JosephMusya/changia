import React from "react";
import styles from "./app.module.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import {auth} from './config/firebase/Firebase';
import Login from './pages/Login';
import { AuthProvider } from "./providers/LoginProvider";
import { useContext } from "react";
import { AuthContext } from "./providers/LoginProvider";

function App() {
  const user = useContext(AuthContext);
  console.log(user)
  return (    
      <div className={styles.app}>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </AuthProvider>
      </div>
  );
}

export default App;
