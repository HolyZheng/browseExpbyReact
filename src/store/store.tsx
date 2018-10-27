import { createStore } from 'redux';
import { expReducer } from  './reducers';

const store = createStore(expReducer, {
  allExps: [],
  expsOfType: [],
  detailOfExp: {}
})

export default store;