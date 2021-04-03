import axios from 'axios';
import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCES,
    FETCH_DATA_FAILURE
} from './actionTypes.js'

export const fetchPayment = () => {
    return (dispatch) => {
      dispatch(fetchPaymentDataRequest())
      axios
        .get('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
          // response.data is the users
          const paymentData = response.data
          dispatch(fetchPaymentDataSucces(paymentData))
        })
        .catch(error => {
            const errorMsg = error.message
          dispatch(fetchPaymentDataFailure(errorMsg))
        })
    }
  }
export const fetchPaymentDataRequest = () => {
  return {
      type:FETCH_DATA_REQUEST
  };
};
export const fetchPaymentDataSucces = paymentData => {
    return {
        type:FETCH_DATA_SUCCES,
        payload: paymentData 
    }
}
export const fetchPaymentDataFailure = error => {
    return {
        type:FETCH_DATA_FAILURE,
        payload: error 
    }
}

