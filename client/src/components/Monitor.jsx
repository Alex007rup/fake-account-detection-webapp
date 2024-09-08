/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styles from "../styles/Monitor.module.css";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const SocialMediaSelector = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const [username, setUsername] = useState('');
  const [url, setURL] = useState('');

  const socialMediaPlatforms = [
    { value: '', label: 'Select a platform' },
    { value: 'facebook', label: 'Facebook' },
    { value: 'twitter', label: 'Twitter' },
    { value: 'instagram', label: 'Instagram' },
    { value: 'linkedin', label: 'LinkedIn' },
    { value: 'youtube', label: 'YouTube' }
  ];

  const handleChangePlatform = (event) => {
    setSelectedPlatform(event.target.value);
  };

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleURL = (event) => {
    setURL(event.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Enter a social media account to analyze</h1>
        <p>We'll analyze the account and give you a score on how likely it is to be fake</p>
      </div>
      <div className={styles.innerDiv}>
        <input
          type="text"
          name="username"
          id="username"
          placeholder='@username'
          onChange={handleUsername}
          value={username}
        />
        <input
          type="text"
          name="url"
          id="url"
          placeholder='Account URL'
          onChange={handleURL}
          value={url}
        />
        <select
          id="social-media"
          value={selectedPlatform}
          onChange={handleChangePlatform}
        >
          {socialMediaPlatforms.map((platform) => (
            <option key={platform.value} value={platform.value}>
              {platform.label}
            </option>
          ))}
        </select>
        <button className={styles.btn} onClick={() => {
          Swal.fire({
            title: "Development Ongoing",
            text: "Working under goes ... !",
            icon: "error"
          });
        }}>Analyze Account</button>
      </div>
    </div>
  );
};

export default SocialMediaSelector;
