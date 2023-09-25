/** @format */

import React from "react";
import styles from "../Styles/Portfolio.module.css";
import Button from "./Features/Button";
function Portfolio() {
  return (
    <div className={styles.portfolio}>
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <header>Our Latest Works</header>
          <main>
            Each event is a testament to our dedication to creating unforgettable moments. From
            intimate gatherings to grand celebrations, our work reflects the individuality of each
            couple and the seamless execution of their dreams.
          </main>
          <Button>Explore our works</Button>
        </div>
        <div className={styles.imgContainer}>
          <div className={styles.left}>
            <div className={`${styles.smallFrame} ${styles.leftTop}`}></div>
            <div className={`${styles.smallFrame} ${styles.leftBottom}`}></div>
          </div>
          <div className={styles.center}></div>
          <div className={styles.right}>
            <div className={`${styles.smallFrame} ${styles.rightTop}`}></div>
            <div className={`${styles.smallFrame} ${styles.rightBottom}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
