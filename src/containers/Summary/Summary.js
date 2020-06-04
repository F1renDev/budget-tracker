import React from "react";
import { useSelector, shallowEqual } from "react-redux";

import DetailedExpenseInfo from "../../components/Expenses/DetailedExpenseInfo/DetailedExpenseInfo";
import Chart from "../../components/Chart/Chart";
import styles from "./Summary.module.css";

const Summary = () => {
  const data = useSelector((state) => state.monthlyExpCalc, shallowEqual);
  const monthlyIncome = useSelector(
    (state) => state.monthlyIncCalc.initialMonthlyInput,
    shallowEqual
  );

  const detailedInfo = data.map((item) => {
    const percent = ((item.cost / monthlyIncome) * 100).toFixed(1);
    return (
      <DetailedExpenseInfo
        key={item.id}
        expensePercent={percent}
        widthPercent={percent}
        expenseSum={item.cost}
        expenseName={item.name}
        bgColor={item.bgColor}
      />
    );
  });

  let totalMoneyLeft = 0;

  data.forEach((item) => {
    totalMoneyLeft += item.cost;
  });

  //Formatting the output numbers
  const numberFormat = new Intl.NumberFormat("en-IN");

  

  return (
    <div className={styles.Summary}>
      <div className={styles.ChartArea}>
        <Chart />
      </div>
      <div className={styles.DetailedInfoArea}>{detailedInfo}</div>
      <div className={styles.LeftoverMoney}>
        Balance: {numberFormat.format(monthlyIncome - totalMoneyLeft)} ₽
      </div>
    </div>
  );
};

export default Summary;
