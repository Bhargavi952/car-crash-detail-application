import React from 'react'
import styles from './Footer.module.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MailIcon from '@mui/icons-material/Mail';
import InstagramIcon from '@mui/icons-material/Instagram';

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
