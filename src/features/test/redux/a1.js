// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  TEST_A_1,
} from './constants';

export function a1() {
  return {
    type: TEST_A_1,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case TEST_A_1:
      return {
        ...state,
      };

    default:
      return state;
  }
}
