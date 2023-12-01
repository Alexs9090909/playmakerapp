// LandingPage.js
import React from 'react';
import styles from './LandingPage.module.css'; // Ajoutez des styles si nécessaire
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { getToken } from '../../utils/Spotify';
import logo from '../../logo.svg';

const LandingPage = () => {
  return (
    <div className={styles.LandingPage}>
      <div className={styles.TextContent}>
        <h2>Hello there! 👋 </h2>
        <p>Thanks for checking my Portfolio! &#x1F60A; </p>
        <p>Unfortunately <strong>Spotify</strong> has now limited the number of users who can access their API &#x1F611;</p>
        <p>If you want me to add you to the list, just <a href="mailto:alexsutocode@gmail.com">send me an email</a>, and I’ll be happy to do so:</p>
        <p>Otherwise if you’re just wandering around, you can just use these logins and have a go at it :</p>
        <p className={styles.Login}>Email: playmakerapp00@gmail.com<br></br>
        Password: Playmaker1234</p>
      </div>
      <button className={styles.ConnectButton} onClick={getToken}>
        <img src={logo} className="App-logo" alt="logo" />
        Connect
      </button>
    </div>
  );
};

export default LandingPage;
