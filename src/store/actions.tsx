import * as constants from './constants';

export interface EditAllExpsArray {
  type: constants.EDIT_ALL_EXPS,
  expArray: Exp[]
}

export interface EditTypeExpsArray {
  type: constants.EDIT_TYPE_EXPS,
  expArray: Exp[]
}

export interface EditExpDetail {
  type: constants.EDIT_EXP_DETAIL,
  detailOfExp: Exp
}

export type ExpAction = EditAllExpsArray | EditTypeExpsArray | EditExpDetail;

export function editAllExpsArray(expArray: Exp[]): EditAllExpsArray {
  return {
    type: constants.EDIT_ALL_EXPS,
    expArray
  }
}

export function editTypeExpsArray(expArray: Exp[]): EditTypeExpsArray {
  return {
    type: constants.EDIT_TYPE_EXPS,
    expArray
  }
}

export function editExpDetail(detailOfExp: Exp): EditExpDetail {
  return {
    type: constants.EDIT_EXP_DETAIL,
    detailOfExp
  }
}
