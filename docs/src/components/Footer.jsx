import React from 'react';
import './Footer.css';

/* Imported Logos */

import discordLogo from '../assets/logoAssets/discordLogo.png'
import twitterLogo from '../assets/logoAssets/twitterLogo.png'
import youtubeLogo from '../assets/logoAssets/youtubeLogo.png'
import instagramLogo from '../assets/logoAssets/instagramLogo.png'

const Footer = () => {
  return (
    <div className='footer-div'>
      <div className='footer-row'>

        <div className='footer-col'>
          <h3>Socials</h3>
          <a href="https://discord.gg/trFrU94q9T" target="_blank" rel="noopener noreferrer">
            <img src={discordLogo} alt="Discord Logo" className="footer-icon" />
            Discord
          </a>
          <a href="" target="_blank" rel='noopener noreferrer'>
            <img src={twitterLogo} alt="Twitter Logo" className="footer-icon" />
            Twitter
          </a>
          <a href="" target="_blank" rel='noopener noreferrer'>
            <img src={youtubeLogo} alt="Youtube Logo" className="footer-icon" />
            YouTube
          </a>
          <a href="" target="_blank" rel='noopener noreferrer'>
            <img src={instagramLogo} alt="Instagram Logo" className="footer-icon" />
            Instagram
          </a>
        </div>

        <div className='footer-col'>
          <h3>About</h3>
          <a href="">Blog</a>
          <a href="">Changelog</a>
          <a href="">Status</a>
          <a href="">Careers</a>
          <a href="">Rewards Program</a>
        </div>

        <div className='footer-col'>
          <h3>Resources</h3>
          <a href="">Ticket Center</a>
          <a href="">Report Issues</a>
        </div>

        <div className='footer-col'>
          <h3>Legal</h3>
          <a href="">Terms of Service</a>
          <a href="">Privacy Policy</a>
        </div>

      </div>
    </div>
  );
};

export default Footer;
