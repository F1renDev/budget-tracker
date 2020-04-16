import React from "react";

import styles from "./Logo.module.css";
import bcLogo from "../../assets/images/logo.png";

const Logo = () => {
  return (
    <div className={styles.Logo}>
      <img src={bcLogo} alt="BC logo"></img>
    </div>
  );
};

export default Logo;
