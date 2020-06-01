import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
import monthlyIncomeCalculator from "./store/reducers/monthlyIncomeCalculator";
import monthlyExpensesCalculator from "./store/reducers/monthlyExpensesCalculator";
import * as serviceWorker from "./serviceWorker";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  monthlyIncCalc: monthlyIncomeCalculator,
  monthlyExpCalc: monthlyExpensesCalculator,
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware()));

const app = (
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

serviceWorker.unregister();
