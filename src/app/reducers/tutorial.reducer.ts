import { Action } from '@ngrx/store';
import * as TutorialActions from '../actions/tutorial.action';

// Section 1
const initialState: any = {
  name: 'Initial Tutorial',
  url: 'http://google.com'
};

// Section 2
export function reducer(state: any[] = [initialState], action: TutorialActions.Actions) {

  console.log('step 3 Inside Reducer');
  // Section 3
  switch (action.type) {
    case TutorialActions.ADD_TUTORIAL:
      return [...state, action.payload];
    case TutorialActions.REMOVE_TUTORIAL:
      state.splice(action.payload, 1);
      return state;
    default:
      return state;
  }
}
