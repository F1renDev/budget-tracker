import React from "react";
import styles from "./Calculator.module.css";
import Button from "../../UI/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import * as actionTypes from "../../store/actions/actionTypes";

const Calculator = props => {
  const monthlyIncome = useSelector(state => state.monthlyIncome, shallowEqual);
  const apartmentCost = useSelector(state => state.apartmentCost, shallowEqual);
  const internetCost = useSelector(state => state.internetCost, shallowEqual);
  const travelCost = useSelector(state => state.travelCost, shallowEqual);
  const foodCost = useSelector(state => state.foodCost, shallowEqual);
  const otherCost = useSelector(state => state.otherCost, shallowEqual);
  const dispatch = useDispatch();

  const handleIncomeInput = event => {
    return {
      type: actionTypes.HANDLE_MONTHLY_INPUT_CHANGE,
      payload: event.target.value
    };
  };

  const handleAddExpense = event => {
    return {
      type: actionTypes.HANDLE_MONTHLY_SPEND_CHANGE,
      payload: event.target.value
    };
  };

  const element = <FontAwesomeIcon size="lg" icon={faTrashAlt} />;
  return (
    <div className={styles.Calculator}>
      <div>
        <p>Тут должно отображаться:</p>
        <ol>
          <li>Блок с ежемесячными расходами: интернет, квартплата</li>

          <li>
            Сделать возможность выбиать конкретно каждый месяц для внесения в
            него инфы. Все сразу не показывать по нажатию на плюс открывать инфу
            для конкретного месяца
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
          value={+monthlyIncome}
          onChange={event => dispatch(handleIncomeInput(event))}
        />
      </div>
      <div>
        <h3>Monthly expenses</h3>
      </div>
      <div className={styles.InputRow}>
        <div>
          <input value="Квартплата" onChange={() => {}} />
        </div>
        <div>
          <input
            placeholder="Сумма"
            value={+apartmentCost}
            onChange={event => dispatch(handleAddExpense(event))}
          />
        </div>
        <div>
          <button>{element}</button>
        </div>
      </div>
      <div className={styles.InputRow}>
        <div>
          <input value="Интернет" onChange={() => {}} />
        </div>
        <div>
          <input
            placeholder="Сумма"
            value={+internetCost}
            onChange={event => dispatch(handleAddExpense(event))}
          />
        </div>
        <div>
          <button>{element}</button>
        </div>
      </div>
      <div className={styles.InputRow}>
        <div>
          <input value="Проезд" onChange={() => {}} />
        </div>
        <div>
          <input
            placeholder="Сумма"
            value={+travelCost}
            onChange={event => dispatch(handleAddExpense(event))}
          />
        </div>
        <div>
          <button>{element}</button>
        </div>
      </div>
      <div className={styles.InputRow}>
        <div>
          <input value="Еда" onChange={() => {}} />
        </div>
        <div>
          <input
            placeholder="Сумма"
            value={+foodCost}
            onChange={event => dispatch(handleAddExpense(event))}
          />
        </div>
        <div>
          <button>{element}</button>
        </div>
      </div>
      <div className={styles.InputRow}>
        <div>
          <input value="Другие траты" onChange={() => {}} />
        </div>
        <div>
          <input
            placeholder="Сумма"
            value={+otherCost}
            onChange={event => dispatch(handleAddExpense(event))}
          />
        </div>
        <div>
          <button>{element}</button>
        </div>
      </div>
      <Button>+ Add expense</Button>
    </div>
  );
};

export default Calculator;
