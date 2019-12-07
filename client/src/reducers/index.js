import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import addNameReducer from './addNameReducer';
import AddListReducer from './addListReducer'


export default combineReducers({
  form: formReducer,
  user: addNameReducer,
  lists: AddListReducer
})