import { expect } from 'chai';

import {
  EXAMPLES_COUNTER_MINUS_ONE,
} from 'src/features/examples/redux/constants';

import {
  counterMinusOne,
  reducer,
} from 'src/features/examples/redux/counterMinusOne';

describe('examples/redux/counterMinusOne', () => {
  it('returns correct action by counterMinusOne', () => {
    expect(counterMinusOne()).to.have.property('type', EXAMPLES_COUNTER_MINUS_ONE);
  });

  it('handles action type EXAMPLES_COUNTER_MINUS_ONE correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: EXAMPLES_COUNTER_MINUS_ONE }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
