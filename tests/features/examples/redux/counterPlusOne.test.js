import { expect } from 'chai';

import {
  EXAMPLES_COUNTER_PLUS_ONE,
} from 'src/features/examples/redux/constants';

import {
  counterPlusOne,
  reducer,
} from 'src/features/examples/redux/counterPlusOne';

describe('examples/redux/counterPlusOne', () => {
  it('returns correct action by counterPlusOne', () => {
    expect(counterPlusOne()).to.have.property('type', EXAMPLES_COUNTER_PLUS_ONE);
  });

  it('handles action type EXAMPLES_COUNTER_PLUS_ONE correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: EXAMPLES_COUNTER_PLUS_ONE }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
