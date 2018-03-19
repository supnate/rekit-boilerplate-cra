import { expect } from 'chai';

import {
  TEST_A_1,
} from 'src/features/test/redux/constants';

import {
  a1,
  reducer,
} from 'src/features/test/redux/a1';

describe('test/redux/a1', () => {
  it('returns correct action by a1', () => {
    expect(a1()).to.have.property('type', TEST_A_1);
  });

  it('handles action type TEST_A_1 correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: TEST_A_1 }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
