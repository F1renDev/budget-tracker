import React from "react";
import styles from "./Summary.module.css";
import { connect } from "react-redux";
import { useSelector, shallowEqual } from "react-redux";

import PieChart from "../../containers/PieChart/PieChart";

const Summary = props => {
  const monthlyIncome = useSelector(state => state.monthlyIncome, shallowEqual);
  const totalYearlyIncome = useSelector(
    state => state.totalYearlyIncome,
    shallowEqual
  );
  const totalYearlySpend = useSelector(
    state => state.totalYearlySpend,
    shallowEqual
  );

  const monthlyTotalSpend = useSelector(
    state => state.monthlyTotalSpend,
    shallowEqual
  );
  return (
    <div className={styles.Summary}>
      <div>
        <p>Тут должно отображаться:</p>
        <ol>
          <li>
            Считаем доход по месяцам. Т.е. если сейчас март - то общая сумма
            дохода - только 3 месяца
          </li>
          <li>Обязательно сделать графу "Сэкономлено\Отложено"</li>
        </ol>
      </div>
      <div className={styles.ChartArea}>
        <p>
          Этот график показывает соотношение потраченного к заработанному за
          конкретный месяц
        </p>
        <br />
        <PieChart
          data={[
            {
              color: "#29d9c2",
              title: "Earned",
              value: +monthlyIncome
            },
            {
              color: "#00a2a7",
              title: "Spent",
              value: +monthlyTotalSpend
            }
          ]}
        />
        <p>
          Этот график показывает соотношение потраченного к заработанному за
          текущий год
        </p>
        <br />
        <PieChart
          data={[
            {
              color: "#29d9c2",
              title: "Earned",
              value: totalYearlyIncome
            },
            {
              color: "#00a2a7",
              title: "Spent",
              value: totalYearlySpend
            }
          ]}
        />
      </div>
      <div>{props.totalAmount}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    totalAmount: state.totalAmount
  };
};

export default connect(mapStateToProps)(Summary);
