import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.png";

const Navbar = () => {
  return (
    <nav className={styles.nav_container}>
      <div className={styles.left_cont}>
        <Link to="/" className={styles.link}>
          <img width="65%" src={logo} alt="logo" />
        </Link>
      </div>
      <div className={styles.right_cont}>
        <Link to="/" className={styles.desc}>
          About Us
        </Link>

        <Link to="/" className={styles.link}>
          <button className={styles.login_btn}>Login</button>
        </Link>
        <Link to="/" className={styles.link}>
          <button className={styles.login_btn}>Sign Up</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
