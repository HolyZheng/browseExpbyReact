import { ExpAction } from './actions';
import { StoreState } from './types';
import * as types from './constants';

export function expReducer(state: StoreState, action: ExpAction): StoreState {
  switch (action.type) {
    case types.EDIT_ALL_EXPS: 
      return {...state, allExps: action.expArray}
    case types.EDIT_TYPE_EXPS:
      return {...state, expsOfType: action.expArray}
    case types.EDIT_EXP_DETAIL:
      return {...state, detailOfExp: action.detailOfExp}
  }
  return state;
}
