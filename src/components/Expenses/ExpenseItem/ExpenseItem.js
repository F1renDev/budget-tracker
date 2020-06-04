import React from "react";
import styles from "./ExpenseItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import * as actionTypes from "../../../store/actions";

const ExpenseItem = (props) => {
  const expense = useSelector(
    (state) =>
      state.monthlyExpCalc.filter((item) => {
        return item.id === props.id;
      })[0],
    shallowEqual
  );

  const dispatch = useDispatch();

  const expenseNameChangeHandler = (e, id) => {
    return {
      type: actionTypes.HANDLE_CHANGE_SINGLE_EXPENSE_NAME,
      value: e.target.value,
      id: id,
    };
  };

  const expenseCostChangeHandler = (e, id) => {
    return {
      type: actionTypes.HANDLE_CHANGE_SINGLE_EXPENSE_COST,
      value: +e.target.value,
      id: id,
    };
  };

  const element = (
    <FontAwesomeIcon
      size="lg"
      icon={faTrashAlt}
      style={{
        color: "#2ad9c2",
        backgroundColor: "#03426f",
        cursor: "pointer",
      }}
    />
  );
  return (
    <div className={styles.ExpenseItem}>
      <div className={styles.ExpenseName}>
        <input
          type="text"
          value={expense.name}
          onChange={(event) =>
            dispatch(expenseNameChangeHandler(event, props.id))
          }
        />
      </div>
      <div className={styles.ExpenseCost}>
        <input
          inputMode="decimal"
          type="number"
          value={expense.cost}
          onChange={(event) =>
            dispatch(expenseCostChangeHandler(event, props.id))
          }
        />
      </div>
      <div className={styles.ExpenseDelete}>
        <button onClick={() => dispatch(props.clicked(props.id))}>
          {element}
        </button>
      </div>
    </div>
  );
};

export default ExpenseItem;
