import * as actionTypes from '../actions'

const initialState = {
  initialMonthlyInput: 40000,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.HANDLE_MONTHLY_INPUT_CHANGE:
      return {
        initialMonthlyInput: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
