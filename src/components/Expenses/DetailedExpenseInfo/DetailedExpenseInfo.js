import React from "react";
import styles from "./DetailedExpenseInfo.module.css";

import expenseIco from "../../../assets/images/expense.png";

const detailedExpenseInfo = (props) => {
  //Adjuting the width of the colored "precent bar" in the summary
  const widthPercent =
    props.widthPercent * 2 <= 5
      ? props.widthPercent * 20
      : props.widthPercent * 2 + "%";

  //Formatting the output numbers
  const numberFormat = new Intl.NumberFormat("en-IN");

  return (
    <div className={styles.ExpenseItem}>
      <div className={styles.ExpenseItemImg}>
        <img src={expenseIco} alt="Expsense" />
      </div>
      <div className={styles.ExpenseItemText}>
        <div className={styles.ExpenseItemTextFirstLine}>
          <div>{props.expenseName}</div>
          <div>{numberFormat.format(props.expenseSum)} ₽</div>
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
