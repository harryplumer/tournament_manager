import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import tournaments from './tournaments'

const rootReducer = combineReducers({
  user,
  flash,
  tournaments
});

export default rootReducer;
