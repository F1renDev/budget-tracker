import React, { useEffect } from "react";
import styles from "./Calculator.module.css";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import axios from "axios";

import ExpenseItem from "../../components/Expenses/ExpenseItem/ExpenseItem";
import * as actionTypes from "../../store/actions";

const Calculator = () => {
  const initialMonthlyInput = useSelector(
    (state) => state.monthlyIncCalc.initialMonthlyInput,
    shallowEqual
  );

  const data = useSelector((state) => state.monthlyExpCalc, shallowEqual);

  const authData = useSelector((state) => state.auth, shallowEqual);

  const dispatch = useDispatch();

  const queryParams = `?auth=${authData.token}`;
  const fetchedData = [];

  useEffect(() => {
    if (authData.isAuth && !authData.loadedData) {
      axios
        .get(
          "https://budget-tracker-app-66952.firebaseio.com/" +
            authData.userId +
            "/" +
            authData.userId +
            ".json" +
            queryParams
        )
        .then((response) => {
          for (let key in response.data) {
            fetchedData.push(response.data[key]);
          }
          dispatch({
            type: actionTypes.HANDLE_SET_EXPENSES_ITEMS,
            expenseItems: fetchedData[0],
          });
          dispatch({
            type: actionTypes.HANDLE_LOADED_STATE_CHANGE,
            loadedData: true,
          });
        })
        .catch((err) => console.log(err));
    }
  }, [
    authData.isAuth,
    authData.loadedData,
    authData.userId,
    dispatch,
    // fetchedData,
    queryParams,
  ]);

  const deleteBtnHandler = (id) => {
    return {
      type: actionTypes.HANDLE_DELETE_EXPENSE_ITEM,
      id: id,
    };
  };

  const addBtnHandler = () => {
    return {
      type: actionTypes.HANDLE_ADD_EXPENSE_ITEM,
    };
  };

  const handleMonthlyInput = (e) => {
    return {
      type: actionTypes.HANDLE_MONTHLY_INPUT_CHANGE,
      payload: +e.target.value,
    };
  };

  const expensesList = data.map((item) => {
    return (
      <li key={item.id}>
        <ExpenseItem
          {...item}
          id={item.id}
          clicked={() => dispatch(deleteBtnHandler(item.id))}
        />
      </li>
    );
  });

  return (
    <div className={styles.Calculator}>
      <h3 className={styles.MonthlyHeader}>Monthly Income</h3>
      <div className={styles.MonthlyInput}>
        <input
          inputMode="decimal"
          type="number"
          value={initialMonthlyInput}
          onChange={(event) => dispatch(handleMonthlyInput(event))}
        />
      </div>
      <h3 className={styles.MonthlyHeader}>Monthly Expenses</h3>
      <ul style={{ listStyle: "none", marginBottom: "2rem" }}>
        {expensesList}
      </ul>
      <div className={styles.AddExpenseBtnContainer}>
        <button
          className={styles.AddExpenseBtn}
          onClick={() => dispatch(addBtnHandler())}
          disabled={data.length >= 20}
        >
          {data.length >= 20
            ? "Upgrade to Pro version to add more"
            : "Add Expense"}
        </button>
      </div>
    </div>
  );
};
export default Calculator;
