import React from "react";
import styles from "./Summary.module.css";
import { useSelector, shallowEqual } from "react-redux";

import PieChart from "../../containers/PieChart/PieChart";

const Summary = (props) => {
  const monthlyIncome = useSelector(
    (state) => state.monthlyIncome,
    shallowEqual
  );

  const monthlyTotalSpend = useSelector(
    (state) => state.monthlyTotalSpend,
    shallowEqual
  );
  // const yearlyTotalIncome = useSelector(
  //   (state) => state.totalYearlyIncome,
  //   shallowEqual
  // );

  // const yearlyTotalSpend = useSelector(
  //   (state) => state.totalYearlySpend,
  //   shallowEqual
  // );

  return (
    <div className={styles.Summary}>
      <div className={styles.Section1}>
        <div>
          <p>
            Этот график показывает <br /> соотношение свободных денег к <br />
            заработанному за месяц
          </p>
          <br />
        </div>
        <div className={styles.ChartArea}>
          <PieChart
            data={[
              {
                color: "#29d9c2",
                title: "Earned",
                value: +monthlyIncome,
              },
              {
                color: "#00a2a7",
                title: "Left",
                value: +monthlyIncome - +monthlyTotalSpend,
              },
            ]}
          />
        </div>
      </div>
      <h3>Great! Here's your income/spend breakdown:</h3>
      <div className={styles.Report}>
        <div className={styles.ReportHeader}>
          <div className={styles.PercentOfExpences}>
            % of necessary expences
          </div>
          <div className={styles.SumOfExpences}>Sum of necessary expences</div>
        </div>
        <div className={styles.ReportBody}>
          <div>{((monthlyTotalSpend / monthlyIncome) * 100).toFixed()}%</div>
          <div>
            {(monthlyTotalSpend / 4).toFixed()}
            <br />
            {monthlyTotalSpend.toFixed()}
            <br />
            {(monthlyTotalSpend * 12).toFixed()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
