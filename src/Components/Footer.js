/** @format */

import React from "react";
import styles from "../Styles/Footer.module.css";

function Footer() {
  return (
    <footer>
      <div className={styles.footerContainer}>
        <div></div>
        <div>
          <span></span>
          <Button></Button>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.socialsContainer}></div>
    </footer>
  );
}

export default Footer;
