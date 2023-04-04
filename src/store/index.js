// 폴더에 있는 index.js를 보면,
// 해당 폴더에 있는 다른 모듈들을 총합해주는 역할

import { combineReducers } from 'redux';
import todo from './modules/todo';
import weightReducer from './modules/weight';

export default combineReducers({
  todo,
  weightReducer,
});
