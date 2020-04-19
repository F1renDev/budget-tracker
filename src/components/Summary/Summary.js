import React, { useState } from "react";
import styles from "./Summary.module.css";
import { useSelector, shallowEqual } from "react-redux";

import PieChart from "../../containers/PieChart/PieChart";

const Summary = (props) => {
  const [showFullReportBody, setShowFullReportBody] = useState(false);

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
            This graph shows <br /> unspent / earnd <br />
            money ratio
          </p>
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
        <h3 className={styles.SummaryBreakdown}>
          Great! Here's your income / spend breakdown:
        </h3>
        <div className={styles.Report}>
          <div className={styles.ReportHeader}>
            <div className={styles.PercentOfExpences}>
              % of mandatory expences
            </div>
            <div className={styles.SumOfExpences}>
              Sum of mandatory expences
            </div>
          </div>
          <div
            className={styles.ReportBody}
            onClick={() => setShowFullReportBody(!showFullReportBody)}
          >
            <div>{((monthlyTotalSpend / monthlyIncome) * 100).toFixed()}%</div>
            <div>
              <div>{(monthlyTotalSpend / 4).toFixed()} / week</div>
              {showFullReportBody ? (
                <span>
                  {monthlyTotalSpend.toFixed()} / month
                  <br />
                  {(monthlyTotalSpend * 12).toFixed()} / year
                </span>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <h3>What now?</h3>
      <p>It's high time you took control over your spendings!</p>
    </div>
  );
};

export default Summary;
