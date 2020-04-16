import React from "react";

import styles from "./Header.module.css";
import Logo from "../Logo/Logo";
import Button from '../../UI/Button/Button'

const header = () => {
  return (
    <div className={styles.Header}>
      <Logo />
      <div className={styles.Signup}>
        <div>
          <Button>Sign in</Button>
        </div>
      </div>
    </div>
  );
};

export default header;
