import React from "react";
import styles from "./Calculator.module.css";
import Button from "../../UI/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

class Calculator extends React.Component {
  render() {
    const element = (
      <FontAwesomeIcon
        size="lg"
        backgroundColor="transparent"
        icon={faTrashAlt}
      />
    );
    return (
      <div className={styles.Calculator}>
        <div>
          <p>Тут должно отображаться:</p>
          <ol>
            <li>Блок с ежемесячными расходами: интернет, квартплата</li>

            <li>
              Сделать возможность выбиать конкретно каждый месяц для внесения в
              него инфы. Все сразу не показывать по нажатию на плюс открывать
              инфу для конкретного месяца
            </li>
          </ol>
          <div>
            <div>Январь(нажать для раскрытия)</div>
            <div>Февраль(нажать для раскрытия)</div>
            <div>Март(нажать для раскрытия)</div>
            <div>Апрель(нажать для раскрытия)</div>
          </div>
        </div>
        <div>
          <h3>Monthly income</h3>
        </div>
        <div className={styles.SteadyIncome}>
          <input placeholder="Your montly income" />
        </div>
        <Button>+ Add income</Button>
        <div>
          <h3>Monthly expenses</h3>
        </div>
        <div className={styles.InputRow}>
          <div>
            <input placeholder="квартплата" />
          </div>
          <div>
            <input placeholder="сумма" />
          </div>
          <div>
            <button>{element}</button>
          </div>
        </div>
        <div className={styles.InputRow}>
          <div>
            <input placeholder="квартплата" />
          </div>
          <div>
            <input placeholder="сумма" />
          </div>
          <div>
            <button>{element}</button>
          </div>
        </div>
        <div className={styles.InputRow}>
          <div>
            <input placeholder="квартплата" />
          </div>
          <div>
            <input placeholder="сумма" />
          </div>
          <div>
            <button>{element}</button>
          </div>
        </div>
        <div className={styles.InputRow}>
          <div>
            <input placeholder="квартплата" />
          </div>
          <div>
            <input placeholder="сумма" />
          </div>
          <div>
            <button>{element}</button>
          </div>
        </div>
        <div className={styles.InputRow}>
          <div>
            <input placeholder="квартплата" />
          </div>
          <div>
            <input placeholder="сумма" />
          </div>
          <div>
            <button>{element}</button>
          </div>
        </div>
        <Button>+ Add expense</Button>
      </div>
    );
  }
}

export default Calculator;
