import React from "react";
import styles from "./Summary.module.css";
import { connect } from "react-redux";

import PieChart from "../../containers/PieChart/PieChart";

class Summary extends React.Component {
  render() {
    return (
      <div className={styles.Summary}>
        <div>
          <p>Тут должно отображаться:</p>
          <ol>
            <li>График показывает соотношение заработанного к потраченному</li>
            <li>
              Считаем доход по месяцам. Т.е. если сейчас март - то общая сумма
              дохода - только 3 месяца
            </li>
            <li>
              Информация о том, сколько тратиться в год\месяц на обязательные
              расходы
            </li>
            <li>Переключатель между годом и месяцем по расходам</li>
            <li>Обязательно сделать графу "Сэкономлено\Отложено"</li>
          </ol>
        </div>
        <div className={styles.ChartArea}>
          <p>
            Этот график показывает соотношение потраченного к заработанному за
            конкретный месяц
          </p><br/>
          <PieChart />
          <p>
            Этот график показывает соотношение потраченного к заработанному за
            текущий год
          </p><br/>
          <PieChart />
        </div>
        <div>{this.props.totalAmount}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    totalAmount: state.totalAmount
  };
};

export default connect(mapStateToProps)(Summary);
