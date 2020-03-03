import * as actionTypes from "../actions/actionTypes";

const initialState = {
  monthlyIncome: 30000,
  apartmentCost: 10000,
  internetCost: 700,
  travelCost: 2500,
  foodCost: 12000,
  otherCost: 0,
  monthlyTotalSpend: 15000,
  totalYearlyIncome: 1,
  totalYearlySpend: 1
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.HANDLE_MONTHLY_INPUT_CHANGE:
      return {
        ...state,
        monthlyIncome: action.payload
      };
    case actionTypes.HANDLE_MONTHLY_SPEND_CHANGE:
      return {
        ...state,
        monthlyTotalSpend: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
