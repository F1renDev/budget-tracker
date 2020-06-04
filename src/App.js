import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/UI/Header/Header";
import Footer from "./components/UI/Footer/Footer";
import MainPage from "./components/MainPage/MainPage";
import Login from "./containers/Login/Login";
import Logout from "./containers/Logout/Logout";
import Signup from "./containers/Signup/Signup";
import styles from "./App.module.css";

const app = () => {
  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.Main}>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/login" exact component={Login} />
          <Route path="/logout" exact component={Logout} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default app;
