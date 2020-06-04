import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import axios from "axios";
import * as actionTypes from "../../store/actions";
import styles from "./Signup.module.css";

const Signup = (props) => {
  const error = useSelector((state) => state.auth.error, shallowEqual);
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();

  useEffect(() => {
    dispatch({ type: actionTypes.HANDLE_ERROR_STATUS_CHANGE, errorMsg: null });
  }, [dispatch]);

  const url =
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCO0PyMkszfPGfAyaXCrBuIbnQZs-cu5-w";

  const onSubmit = (data) => {
    const credentials = {
      email: data.Email,
      password: data.Password,
      returnSecureToken: true,
    };
    axios
      .post(url, credentials)
      .then((response) => {
        console.log(response);
        props.history.push("/login?action=aftersignup");
      })
      .catch((err) => {
        console.log(err.response.data.error.message);
        dispatch({
          type: actionTypes.HANDLE_ERROR_STATUS_CHANGE,
          errorMsg: err.response.data.error.message,
        });
      });
  };

  return (
    <div className={styles.Signup}>
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
        <input className={styles.SubmitBtn} type="submit" value="Sign up" />
      </form>
    </div>
  );
};
export default Signup;
