import * as actionTypes from "../actions";

const initialState = {
  isAuth: false,
  token: null,
  userId: null,
  error: null,
  loadedData: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.HANDLE_USER_LOGIN:
      return {
        ...state,
        isAuth: true,
        token: action.idToken,
        userId: action.userId,
      };
    case actionTypes.HANDLE_USER_LOGOUT:
      return {
        ...state,
        isAuth: false,
        token: null,
        userId: null,
        loadedData: false,
      };
    case actionTypes.HANDLE_ERROR_STATUS_CHANGE: {
      return { ...state, error: action.errorMsg };
    }
    case actionTypes.HANDLE_LOADED_STATE_CHANGE:
      return { ...state, loading: action.isLoading };
    default:
      return state;
  }
};

export default reducer;
