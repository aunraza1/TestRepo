import {combineReducers} from 'redux';
import AuthReducer from './auth-reducer';
const appReducer = combineReducers({
  AuthReducer: AuthReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
