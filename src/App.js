import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import Header from "./components/UI/Header/Header";
import Footer from "./components/UI/Footer/Footer";
import MainPage from "./components/MainPage/MainPage";
import Login from "./containers/Login/Login";
import Logout from "./containers/Logout/Logout";
import Signup from "./containers/Signup/Signup";
import styles from "./App.module.css";
import * as actionTypes from "./store/actions";

const App = () => {
  const auth = useSelector((state) => state.auth, shallowEqual);
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token && !auth.isAuth) {
      dispatch({ type: actionTypes.HANDLE_USER_LOGOUT });
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate <= new Date()) {
        dispatch({ type: actionTypes.HANDLE_USER_LOGOUT });
      } else {
        const userId = localStorage.getItem("userId");
        dispatch({
          type: actionTypes.HANDLE_USER_LOGIN,
          idToken: token,
          userId: userId,
        });
        setTimeout(() => {
          dispatch({ type: actionTypes.HANDLE_USER_LOGOUT });
        }, expirationDate.getTime() - new Date().getTime());
      }
    }
  }, [auth.isAuth,dispatch]);
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

export default App;
