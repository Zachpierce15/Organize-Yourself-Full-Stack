import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import addNameReducer from './addNameReducer';


export default combineReducers({
  form: formReducer,
  user: addNameReducer
})