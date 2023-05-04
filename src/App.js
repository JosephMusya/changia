import React from 'react';
import styles from './app.module.css';
import Navbar from './components/Navbar';
import Home from './pages/Homepage';

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
