import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import monthlyIncomeCalculator from "./store/reducers/monthlyIncomeCalculator";
import monthlyExpensesCalculator from "./store/reducers/monthlyExpensesCalculator";
import auth from "./store/reducers/auth";
import * as serviceWorker from "./serviceWorker";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  monthlyIncCalc: monthlyIncomeCalculator,
  monthlyExpCalc: monthlyExpensesCalculator,
  auth: auth,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const app = (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));

serviceWorker.unregister();
