import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import axios from "axios";
import * as actionTypes from "../../store/actions";
import styles from "./Login.module.css";

const Login = (props) => {
  const error = useSelector((state) => state.auth.error, shallowEqual);
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();

  useEffect(() => {
    dispatch({
      type: actionTypes.HANDLE_ERROR_STATUS_CHANGE,
      errorMsg: null,
    });
  }, [dispatch]);

  const url =
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCO0PyMkszfPGfAyaXCrBuIbnQZs-cu5-w";

  const onSubmit = async (data) => {
    try {
      const credentials = {
        email: data.Email,
        password: data.Password,
        returnSecureToken: true,
      };
      const response = await axios.post(url, credentials);
      const expirationDate = new Date(
        new Date().getTime() + response.data.expiresIn * 1000
      );
      localStorage.setItem("token", response.data.idToken);
      localStorage.setItem("expirationDate", expirationDate);
      localStorage.setItem("userId", response.data.localId);
      dispatch({
        type: actionTypes.HANDLE_USER_LOGIN,
        idToken: response.data.idToken,
        userId: response.data.localId,
      });
      dispatch({
        type: actionTypes.HANDLE_ERROR_STATUS_CHANGE,
        errorMsg: null,
      });
      //Logging out after the token is expired
      setTimeout(() => {
        dispatch({ type: actionTypes.HANDLE_USER_LOGOUT });
      }, response.data.expiresIn * 1000);
      props.history.push("/");
    } catch (err) {
      dispatch({
        type: actionTypes.HANDLE_ERROR_STATUS_CHANGE,
        errorMsg: err.response.data.error.message,
      });
    }
  };

  return (
    <div className={styles.Login}>
      {props.location.search.slice(1).split("=")[1] === "aftersignup" ? (
        <h3 className={styles.AfterSignup}>Almost there! Log in...</h3>
      ) : null}
      {error ? <p>{error}</p> : null}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Email"
          name="Email"
          ref={register({
            required: true,
            pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />
        {errors.Email && <p>Enter the correct email</p>}
        <input
          type="password"
          placeholder="Password"
          name="Password"
          ref={register({ required: true, minLength: 6, maxLength: 80 })}
        />
        {errors.Password && <p>Min length - 6</p>}
        <input className={styles.SubmitBtn} type="submit" value="Log in" />
      </form>
    </div>
  );
};
export default Login;
