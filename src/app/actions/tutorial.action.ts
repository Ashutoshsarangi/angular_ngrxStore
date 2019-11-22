// Section 1
import { Action } from '@ngrx/store';

// Section 2
export const ADD_TUTORIAL = '[TUTORIAL] Add';
export const REMOVE_TUTORIAL = '[TUTORIAL] Remove';

// Section 3
export class AddTutorial implements Action {
  readonly type = ADD_TUTORIAL;

  constructor(public payload) {
    console.log('step 2 inside Action Constructor');
  }
}

export class RemoveTutorial implements Action {
  readonly type = REMOVE_TUTORIAL;

  constructor(public payload: number) { }
}

// Section 4
export type Actions = AddTutorial | RemoveTutorial;
