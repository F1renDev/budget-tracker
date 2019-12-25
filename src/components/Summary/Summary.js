import React from "react";
import styles from "./Summary.module.css";

import PieChart from "../../containers/PieChart/PieChart";

class Summary extends React.Component {
  render() {
    return (
      <div className={styles.Summary}>
        <div>
          <p>Тут должно отображаться:</p>
          <ol>
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
        <div style={{ paddingBottom: "15px" }}>
          <PieChart />
        </div>
      </div>
    );
  }
}

export default Summary;
