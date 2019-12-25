import React from "react";
import styles from "./Header.module.css";

const header = () => {
  return (
    <div className={styles.Header}>
      <div>Logo</div>
      <div className={styles.Signup}>
        <div>
          Если не авторизирован, видна информация только за текущий месяц
        </div><br/>
        <div>Sign-up to save</div>
        <div>
          <button>Sign-up</button>
        </div>
      </div>
    </div>
  );
};

export default header;
