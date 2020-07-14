import React from "react";
import styles from "./Footer.module.css";

const footer = () => {
  return (
    <div className={styles.Footer}>
      <div></div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://f1rendev.netlify.com/"
      >
        Coded by Valentin Maltsev
      </a>
    </div>
  );
};

export default footer;
