import { expect } from 'chai';

import {
  EXAMPLES_COUNTER_RESET,
} from 'src/features/examples/redux/constants';

import {
  counterReset,
  reducer,
} from 'src/features/examples/redux/counterReset';

describe('examples/redux/counterReset', () => {
  it('returns correct action by counterReset', () => {
    expect(counterReset()).to.have.property('type', EXAMPLES_COUNTER_RESET);
  });

  it('handles action type EXAMPLES_COUNTER_RESET correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: EXAMPLES_COUNTER_RESET }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
