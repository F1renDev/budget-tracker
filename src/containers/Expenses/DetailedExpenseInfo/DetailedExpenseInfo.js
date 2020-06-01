import React from "react";
import styles from "./DetailedExpenseInfo.module.css";

import expenseIco from "../../../assets/images/expense.png";

const detailedExpenseInfo = (props) => {
  const widthPercent = props.widthPercent*2 + "%";
  return (
    <div className={styles.ExpenseItem}>
      <div className={styles.ExpenseItemImg}>
        <img src={expenseIco} alt="Expsense" />
      </div>
      <div className={styles.ExpenseItemText}>
        <div className={styles.ExpenseItemTextFirstLine}>
          <div>{props.expenseName}</div>
          <div>{props.expenseSum} ₽</div>
        </div>
        <div className={styles.ExpenseItemTextSecondLine}>
          <div
            style={{ backgroundColor: props.bgColor, width: widthPercent }}
            className={styles.ExpenseItemTextSecondLineIndicator}
          ></div>
          <div className={styles.ExpenseItemTextSecondLinePercent}>
            {props.expensePercent}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default detailedExpenseInfo;
