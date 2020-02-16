import React from "react";
import styles from "./App.module.css";
import Header from "./containers/Header/Header";
import Calculator from "./components/Calculator/Calculator";
import Summary from "./components/Summary/Summary";
import Footer from "./containers/Footer/Footer";

const App = () => {
  return (
    <div className={styles.App}>
      <Header />
      <hr />
      <div className={styles.Main}>
        <Calculator />
        <Summary />
      </div>
      <hr />
      <Footer />
    </div>
  );
};

export default App;
