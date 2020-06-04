import React from "react";
import { Link } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";

import styles from "./Header.module.css";

const Header = (props) => {
  const isAuth = useSelector((state) => state.auth.isAuth, shallowEqual);
  const SignupSaveBtn = !isAuth ? (
    <Link to="/signup" >
      <div className={styles.SignButton}>Register</div>
    </Link>
  ) : (
    <Link to="/">
      <div className={styles.SignButton}>Save</div>
    </Link>
  );
  const LogInLogOutBtn = !isAuth ? (
    <Link to="/login">
      <div className={styles.SignButton}>Log in</div>
    </Link>
  ) : (
    <Link to="/logout">
      <div className={styles.SignButton}>Log out</div>
    </Link>
  );

  return (
    <div className={styles.Header}>
      <div>
        <Link to="/">Logo</Link>
      </div>
      <div className={styles.BtnSection}>
        <div>{SignupSaveBtn}</div>
        <div>{LogInLogOutBtn}</div>
      </div>
    </div>
  );
};

export default Header;
