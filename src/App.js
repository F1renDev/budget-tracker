import React from "react";

import Header from "./containers/Header/Header";
import Footer from "./containers/Footer/Footer";
import Calculator from "./components/Calculator/Calculator";
import Summary from "./components/Summary/Summary";
import styles from "./App.module.css";

const app = () => {
  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.Main}>
        <Calculator />
        <Summary />
      </div>
      <Footer />
    </div>
  );
};

export default app;
