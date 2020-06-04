import React from "react";
import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={styles.Input}>
      <label>{props.label}</label>
      <input className={styles.inputElement} {...props} />
    </div>
  );
};

export default Input;
