import React from "react";
import styles from "./Footer.module.css";
// import FacebookIcon from '@material-ui/icons/Facebook';
// import TwitterIcon from '@material-ui/icons/Twitter';
// import YouTubeIcon from '@material-ui/icons/YouTube';
// import MailIcon from '@material-ui/icons/Mail';
// import InstagramIcon from '@material-ui/icons/Instagram';

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

      {/* <div className={styles.social_icons} >
              <FacebookIcon/>
              <TwitterIcon/>
              <YouTubeIcon/>
              <MailIcon/>
              <InstagramIcon/>
          </div> */}
    </div>
  );
};

export default Footer;
