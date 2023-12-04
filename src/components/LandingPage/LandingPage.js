// LandingPage.js
import React from 'react';
import styles from './LandingPage.module.css';
import { Link } from 'react-router-dom';
import { getToken } from '../../utils/Spotify';
import logo from '../../logo.svg';

const LandingPage = () => {
  const handleConnectClick = () => {
    getToken();
  };

  return (
    <div className={styles.LandingPage}>
      <div className={styles.TextContent}>
        <h2>Hello therexxxzzzz! 👋 </h2>
        <p>Thanks for checking my Portfolio! &#x1F60A; </p>
        <p>Unfortunately <strong>Spotify</strong> has now limited the number of users who can access their API &#x1F611;</p>
        <p>If you want me to add you to the list, just <a href="mailto:alexsutocode@gmail.com">send me an email</a>, and I’ll be happy to do so:</p>
        <p>Otherwise if you’re just wandering around, you can just use these logins and have a go at it:</p>
        <p className={styles.Login}>Email: playmakerapp00@gmail.com<br></br>
          Password: Playmaker1234</p>
      </div>
      <Link to="/App">
        <button className={styles.ConnectButton} onClick={handleConnectClick}>
          <img src={logo} className="App-logo" alt="logo" />
          Connect
        </button>
      </Link>
    </div>
  );
};

export default LandingPage;
