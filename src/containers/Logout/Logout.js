import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import * as actionTypes from "../../store/actions";

const Logout = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: actionTypes.HANDLE_USER_LOGOUT });
    //Getting to the starting page after successful logout
    props.history.push("/");
  }, [dispatch, props.history]);

  return <Redirect to="/" />;
};

export default Logout;
