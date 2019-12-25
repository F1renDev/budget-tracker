import React from "react";
import styles from "./Calculator.module.css";
import Button from "../../UI/Button/Button";

class Calculator extends React.Component {
  render() {
    return (
      <div className={styles.Calculator}>
        <div>
          <p>Тут должно отображаться:</p>
          <ol>
            <li>Блок с ежемесячными расходами: интернет, квартплата</li>
            <li>Блок с единичными тратами</li>
            <li>
              Сделать возможность добавить доход (халтура, подарили и т.д.)
            </li>
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
          <input
            style={{
              backgroundColor: "rgb(255, 255, 255)",
              boxShadow:
                "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
              lineheight: "1.25",
              borderRadius: "0.25rem",
              padding: "0.75rem"
            }}
            placeholder="Your montly income"
          />
        </div>
        <Button>Add income</Button>
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
            <button>Delete</button>
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
            <button>Delete</button>
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
            <button>Delete</button>
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
            <button>Delete</button>
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
            <button>Delete</button>
          </div>
        </div>
        <Button>Add expense</Button>
      </div>
    );
  }
}

export default Calculator;
