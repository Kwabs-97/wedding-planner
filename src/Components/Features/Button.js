/** @format */

import React from "react";
import styles from "../../Styles/Buttons.module.css";

function Button(props) {
  const { className } = props;
  return <button className={`${styles.button} ${className}`}>{props.children}</button>;
}

export default Button;
