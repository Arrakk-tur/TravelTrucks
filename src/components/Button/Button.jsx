import React from "react";
import styles from "./Button.module.css";

const Button = ({ text, onClick, type = "button" }) => {
  return (
    <button type={type} onClick={onClick} className={styles.button}>
      {text}
    </button>
  );
};

export default Button;
