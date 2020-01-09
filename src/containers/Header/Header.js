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
        <div>Sign in to save</div>
        <div>
          <button>Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default header;
