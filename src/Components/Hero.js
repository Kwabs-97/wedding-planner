/** @format */

import React from "react";
import styles from "../Styles/Hero.module.css";
import Button from "./Features/Button";

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <header>
          <span>Capturing your love story</span>
          <div>
            <span>
              Embark on a journey to your dream wedding with us. Every detail meticulously curated,
              every moment thoughtfully designed. Let your love story take center stage as we bring
              your vision to life.
            </span>
            <Button>Plan your dream wedding </Button>
          </div>
        </header>
        <main></main>
      </div>
    </div>
  );
}

export default Hero;
