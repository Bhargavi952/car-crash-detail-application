import React from "react";
import styles from "./Footer.module.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MailIcon from '@mui/icons-material/Mail';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div className={styles.footer_cont}>
      <div className={styles.footer_description}>
        <div>
          <h4>COMPANY</h4>

          <p>Carreers</p>
          <p>Newsroom</p>
          <p>Contact Us</p>
        </div>
        <div>
          <h4>RESOURCES</h4>
          <p>Docs</p>
          <p>Support</p>
          <p>FAQs</p>
        </div>
        <div>
          <h4>OVERVIEW</h4>

          <p>Terms of Use</p>
          <p>Privacy Policy</p>
          <p>History</p>
        </div>
      </div>
      <div className={styles.line}></div>

      <div className={styles.social_icons} >
              <FacebookIcon/>
              <TwitterIcon/>
              <YouTubeIcon/>
              <MailIcon/>
              <InstagramIcon/>
          </div>
    </div>
  );
};

export default Footer;
