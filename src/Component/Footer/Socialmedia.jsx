import React from 'react'
import styles from './Footer.module.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import MailIcon from '@material-ui/icons/Mail';
import InstagramIcon from '@material-ui/icons/Instagram';

const Socialmedia = () => {
    return (
        <div className={styles.social_icons} >
        <FacebookIcon/>
        <TwitterIcon/>
        <YouTubeIcon/>
        <MailIcon/>
        <InstagramIcon/>
    </div>
    )
}

export default Socialmedia
