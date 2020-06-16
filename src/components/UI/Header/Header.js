import React from "react";
import { Link } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";
import axios from "axios";

import styles from "./Header.module.css";

const Header = () => {
  const auth = useSelector((state) => state.auth, shallowEqual);
  const data = useSelector((state) => state.monthlyExpCalc, shallowEqual);
  const income = useSelector(
    (state) => state.monthlyIncCalc.initialMonthlyInput
  );

  let sendData = data.map((item) => {
    return {
      id: item.id,
      name: item.name,
      cost: item.cost,
      bgColor: item.bgColor,
    };
  });

  const sendData2 = {
    [auth.userId]: { expenses: sendData, income: income, userId: auth.userId },
  };

  const send = async () => {
    try {
      const response = await axios.put(
        "https://budget-tracker-app-66952.firebaseio.com/" +
          auth.userId +
          ".json?auth=" +
          auth.token,
        sendData2
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const SignupSaveBtn = !auth.isAuth ? (
    <Link to="/signup">
      <div className={styles.SignButton}>Register</div>
    </Link>
  ) : (
    <Link to="/">
      <div onClick={send} className={styles.SignButton}>
        Save
      </div>
    </Link>
  );
  const LogInLogOutBtn = !auth.isAuth ? (
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
