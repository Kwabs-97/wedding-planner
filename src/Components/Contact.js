/** @format */

import React from "react";
import Styles from "../Styles/Contact.module.css";
import Button from "./Features/Button";

function Contact() {
  return (
    <div className={Styles.contact}>
      <div className={Styles.container}>
        <header>Connect With Us and Begin Your Journey to a Perfect Wedding</header>
        <p>
          Our team is here to guide you every step of the way, ensuring that your love story is
          beautifully woven into every detail.
        </p>
        <Button>Start planning</Button>
      </div>
    </div>
  );
}

export default Contact;
