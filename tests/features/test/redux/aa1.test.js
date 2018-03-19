import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import { expect } from 'chai';

import {
  TEST_AA_1_BEGIN,
  TEST_AA_1_SUCCESS,
  TEST_AA_1_FAILURE,
  TEST_AA_1_DISMISS_ERROR,
} from 'src/features/test/redux/constants';

import {
  aa1,
  dismissAa1Error,
  reducer,
} from 'src/features/test/redux/aa1';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('test/redux/aa1', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('dispatches success action when aa1 succeeds', () => {
    const store = mockStore({});

    return store.dispatch(aa1())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).to.have.property('type', TEST_AA_1_BEGIN);
        expect(actions[1]).to.have.property('type', TEST_AA_1_SUCCESS);
      });
  });

  it('dispatches failure action when aa1 fails', () => {
    const store = mockStore({});

    return store.dispatch(aa1({ error: true }))
      .catch(() => {
        const actions = store.getActions();
        expect(actions[0]).to.have.property('type', TEST_AA_1_BEGIN);
        expect(actions[1]).to.have.property('type', TEST_AA_1_FAILURE);
        expect(actions[1]).to.have.nested.property('data.error').that.exist;
      });
  });

  it('returns correct action by dismissAa1Error', () => {
    const expectedAction = {
      type: TEST_AA_1_DISMISS_ERROR,
    };
    expect(dismissAa1Error()).to.deep.equal(expectedAction);
  });

  it('handles action type TEST_AA_1_BEGIN correctly', () => {
    const prevState = { aa1Pending: false };
    const state = reducer(
      prevState,
      { type: TEST_AA_1_BEGIN }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.aa1Pending).to.be.true;
  });

  it('handles action type TEST_AA_1_SUCCESS correctly', () => {
    const prevState = { aa1Pending: true };
    const state = reducer(
      prevState,
      { type: TEST_AA_1_SUCCESS, data: {} }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.aa1Pending).to.be.false;
  });

  it('handles action type TEST_AA_1_FAILURE correctly', () => {
    const prevState = { aa1Pending: true };
    const state = reducer(
      prevState,
      { type: TEST_AA_1_FAILURE, data: { error: new Error('some error') } }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.aa1Pending).to.be.false;
    expect(state.aa1Error).to.exist;
  });

  it('handles action type TEST_AA_1_DISMISS_ERROR correctly', () => {
    const prevState = { aa1Error: new Error('some error') };
    const state = reducer(
      prevState,
      { type: TEST_AA_1_DISMISS_ERROR }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.aa1Error).to.be.null;
  });
});
