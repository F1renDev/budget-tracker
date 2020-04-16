import * as actionTypes from "../actions/actionTypes";

const initialState = {
  monthlyIncome: 56000,
  apartmentCost: 10000,
  internetCost: 700,
  travelCost: 2500,
  foodCost: 12000,
  otherCost: 0,
  totalYearlyIncome: 1,
  totalYearlySpend: 1
};

const MTS =
  initialState.apartmentCost +
  initialState.internetCost +
  initialState.travelCost +
  initialState.foodCost +
  initialState.otherCost;

initialState.monthlyTotalSpend = MTS;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.HANDLE_MONTHLY_INPUT_CHANGE:
      return {
        ...state,
        monthlyIncome: action.payload
      };
    case actionTypes.HANDLE_TRAVEL_COST_CHANGE:
      return {
        ...state,
        monthlyTotalSpend:
          state.monthlyTotalSpend - state.travelCost + +action.payload,
        travelCost: action.payload
      };
    case actionTypes.HANDLE_APARTMENT_COST_CHANGE:
      return {
        ...state,
        monthlyTotalSpend:
          state.monthlyTotalSpend - state.apartmentCost + +action.payload,
        apartmentCost: action.payload
      };
    case actionTypes.HANDLE_FOOD_COST_CHANGE:
      return {
        ...state,
        monthlyTotalSpend:
          state.monthlyTotalSpend - state.foodCost + +action.payload,
        foodCost: action.payload
      };
    case actionTypes.HANDLE_INTERNET_COST_CHANGE:
      return {
        ...state,
        monthlyTotalSpend:
          state.monthlyTotalSpend - state.internetCost + +action.payload,
        internetCost: action.payload
      };
    case actionTypes.HANDLE_MONTHLY_OTHER_SPEND_CHANGE:
      return {
        ...state,
        monthlyTotalSpend:
          state.monthlyTotalSpend - state.otherCost + +action.payload,
        otherCost: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
