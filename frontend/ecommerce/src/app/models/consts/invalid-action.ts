import { Action } from '@ngrx/store';
import { type } from 'src/app/utils/functions';

const invalidActionType = type('[Invalid Action] - Invalid Action ocurred-');

export class InvalidAction implements Action {
  readonly type = invalidActionType;
  constructor() { }
}
