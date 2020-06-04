import * as actionTypes from "../actions";

const initialState = {
  isAuth: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.HANDLE_USER_LOGIN:
      return { ...state, isAuth: true };
    case actionTypes.HANDLE_USER_LOGOUT:
      return { ...state, isAuth: false };
    case actionTypes.HANDLE_ERROR_STATUS_CHANGE: {
      return { ...state, error: action.errorMsg };
    }
    default:
      return state;
  }
};

export default reducer;
