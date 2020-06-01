import React from "react";

import styles from "./Header.module.css";

const header = () => {
  return (
    <div className={styles.Header}>
      <div>Logo</div>
      {/* Кнопка будет показывать Логин/Регистрация в зависимости от состояния */}
      <div className={styles.SignButton}>Sign in</div>
    </div>
  );
};

export default header;
