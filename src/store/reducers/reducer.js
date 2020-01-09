import * as actionTypes from "../actions/actionTypes";

const initialState = {
  monthlyIncome: 0,
  totalEarnedAmount: 0,
  totalSpentAmount: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREASE_TOTAL_AMOUNT:
      return {
        ...state,
        totalAmount: 100
      };
    default:
      return state;
  }
};

export default reducer;
