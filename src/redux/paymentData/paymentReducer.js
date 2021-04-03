import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCES,
  FETCH_DATA_FAILURE,
} from "./actionTypes.js";

const initalState = {
  loading: false,
  paymentData: {},
  error: "",
};

const paymentReducer = (state = initalState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DATA_SUCCES:
      return {
        loading: false,
        paymentData: action.payload,
        error: ""
      };
    case FETCH_DATA_FAILURE:
      return {
        loading: false,
        paymentData: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default paymentReducer;
