import {combineReducers} from 'redux';
import paymentReducer from './paymentData/paymentReducer';


const rootReducer = combineReducers(
    {
        payment : paymentReducer
    }
)

export default rootReducer