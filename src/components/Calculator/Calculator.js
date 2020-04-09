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

  const expenses = [
    {
      expense: "Квартплата",
      cost: apartmentCost,
      type: actionTypes.HANDLE_APARTMENT_COST_CHANGE
    },
    {
      expense: "Интернет",
      cost: internetCost,
      type: actionTypes.HANDLE_INTERNET_COST_CHANGE
    },
    {
      expense: "Проезд",
      cost: travelCost,
      type: actionTypes.HANDLE_TRAVEL_COST_CHANGE
    },
    {
      expense: "Еда",
      cost: foodCost,
      type: actionTypes.HANDLE_FOOD_COST_CHANGE
    },
    {
      expense: "Другие траты",
      cost: otherCost,
      type: actionTypes.HANDLE_MONTHLY_OTHER_SPEND_CHANGE
    }
  ];

  const handleIncomeInput = event => {
    return {
      type: actionTypes.HANDLE_MONTHLY_INPUT_CHANGE,
      payload: event.target.value
    };
  };

  const handleExistingExpenseInput = (event, type) => {
    console.log(type);
    return {
      type: type,
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
          type="number"
          value={monthlyIncome}
          onChange={event => dispatch(handleIncomeInput(event))}
        />
      </div>
      <div>
        <h3>Monthly expenses</h3>
      </div>
      {expenses.map(item => {
        return (
          <React.Fragment key={item.expense}>
            <div className={styles.InputRow}>
              <div>
                <input value={item.expense} onChange={() => {}} />
              </div>
              <div>
                <input
                  placeholder="Сумма"
                  value={item.cost}
                  onChange={event => {
                    dispatch(handleExistingExpenseInput(event, item.type));
                  }}
                />
              </div>
              <div>
                <button>{element}</button>
              </div>
            </div>
          </React.Fragment>
        );
      })}
      <Button>+ Add expense</Button>
    </div>
  );
};

export default Calculator;
