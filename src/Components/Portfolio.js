/** @format */

import React from "react";
import styles from "../Styles/Portfolio.module.css";
import Button from "./Features/Button";
function Portfolio() {
  return (
    <div className={styles.portfolio}>
          <div className={styles.container}>
              <div className={styles.headerContainer}>
                  <header></header>
                  <main></main>
                  <Button>Explore our works</Button>
              </div>
              <div className={styles.imgContainer}>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
              </div>
      </div>
    </div>
  );
}

export default Portfolio;
