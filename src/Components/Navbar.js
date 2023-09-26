/** @format */

import React from "react";
import styles from "../Styles/Navbar.module.css";
import Button from "./Features/Button";

const navLinks = [
  {
    id: 1,
    link: "About Us",
  },
  {
    id: 2,
    link: "Services",
  },
  {
    id: 3,
    link: "Our Projects",
  },
  {
    id: 4,
    link: "Blog",
  },
];

function Navbar() {
  return (
    <nav>
      <div className={styles.navLinksContainer}>
        <ul>
          <li>
            {navLinks.map((link) => {
              return <a key={link.id} href="#">{link.link}</a>;
            })}
          </li>
        </ul>
      </div>
      <Button>Contact Us</Button>
    </nav>
  );
}

export default Navbar;
