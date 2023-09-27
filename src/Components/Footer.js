/** @format */

import React, { useState } from "react";
import styles from "../Styles/Footer.module.css";
import { Link, animateScroll as scroll } from "react-scroll";
import Button from "./Features/Button";

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

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

  const scrollToTop = () => {
    scroll.scrollToTop();
  }
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
      <div className={styles.container}>
        <div className={styles.footerContainer}>
          <div className={styles.footerLinks}>
            <ul className={styles.links}>
              <li>
                {footerLinks.map((footerLink) => (
                  <Link to={footerLink.link} key={footerLink.id} smooth={true} duration={500}>
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
        <div className={styles.socialsContainer}>
          <FaInstagram style={{ width: "1.25rem", height: "1.25rem" }} />
          <FaFacebook style={{ width: "1.25rem", height: "1.25rem" }} />
          <FaLinkedin style={{ width: "1.25rem", height: "1.25rem" }} />
          <FaTwitter style={{ width: "1.25rem", height: "1.25rem" }} />
          <FaYoutube style={{ width: "1.25rem", height: "1.25rem" }} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
