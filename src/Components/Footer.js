/** @format */

import React, { useState } from "react";
import styles from "../Styles/Footer.module.css";
import { Link, animateScroll as scroll } from "react-scroll";
import Button from "./Features/Button";

const footerLinks = [
  {
    id: 1,
    link: "Home",
  },
  {
    id: 2,
    link: "About",
  },
  {
    id: 3,
    link: "Services",
  },
  {
    id: 4,
    link: "Portfolio",
  },
];
function Footer() {
  const [hasValue, setHasValue] = useState(false);

  const handleOnChange = (e) => {
    let value = e.target.value;
    if (value.trim() !== "") {
      setHasValue(true);
    } else {
      setHasValue(false);
    }
  };
  const inputClass = hasValue ? styles.hasValue : styles.input;

  return (
    <footer>
      <div className={styles.footerContainer}>
        <div className={styles.footerLinks}>
          <ul className={styles.links}>
            {" "}
            <li>
              {" "}
              {footerLinks.map((footerLink) => (
                <Link to={footerLink.link} key={footerLink.id}>
                  {footerLink.link}
                </Link>
              ))}
            </li>
          </ul>
        </div>
        <div className={styles.inputContainer}>
          <input type="email" id="email" onChange={handleOnChange} className={inputClass} />
          <label htmlFor="email" className={styles.label}>
            Email address
          </label>
          <Button>Subscribe</Button>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.socialsContainer}></div>
    </footer>
  );
}

export default Footer;
