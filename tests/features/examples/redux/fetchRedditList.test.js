import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import { expect } from 'chai';

import {
  EXAMPLES_FETCH_REDDIT_LIST_BEGIN,
  EXAMPLES_FETCH_REDDIT_LIST_SUCCESS,
  EXAMPLES_FETCH_REDDIT_LIST_FAILURE,
  EXAMPLES_FETCH_REDDIT_LIST_DISMISS_ERROR,
} from 'src/features/examples/redux/constants';

import {
  fetchRedditList,
  dismissFetchRedditListError,
  reducer,
} from 'src/features/examples/redux/fetchRedditList';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('examples/redux/fetchRedditList', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('dispatches success action when fetchRedditList succeeds', () => {
    const store = mockStore({});

    return store.dispatch(fetchRedditList())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).to.have.property('type', EXAMPLES_FETCH_REDDIT_LIST_BEGIN);
        expect(actions[1]).to.have.property('type', EXAMPLES_FETCH_REDDIT_LIST_SUCCESS);
      });
  });

  it('dispatches failure action when fetchRedditList fails', () => {
    const store = mockStore({});

    return store.dispatch(fetchRedditList({ error: true }))
      .catch(() => {
        const actions = store.getActions();
        expect(actions[0]).to.have.property('type', EXAMPLES_FETCH_REDDIT_LIST_BEGIN);
        expect(actions[1]).to.have.property('type', EXAMPLES_FETCH_REDDIT_LIST_FAILURE);
        expect(actions[1]).to.have.nested.property('data.error').that.exist;
      });
  });

  it('returns correct action by dismissFetchRedditListError', () => {
    const expectedAction = {
      type: EXAMPLES_FETCH_REDDIT_LIST_DISMISS_ERROR,
    };
    expect(dismissFetchRedditListError()).to.deep.equal(expectedAction);
  });

  it('handles action type EXAMPLES_FETCH_REDDIT_LIST_BEGIN correctly', () => {
    const prevState = { fetchRedditListPending: false };
    const state = reducer(
      prevState,
      { type: EXAMPLES_FETCH_REDDIT_LIST_BEGIN }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.fetchRedditListPending).to.be.true;
  });

  it('handles action type EXAMPLES_FETCH_REDDIT_LIST_SUCCESS correctly', () => {
    const prevState = { fetchRedditListPending: true };
    const state = reducer(
      prevState,
      { type: EXAMPLES_FETCH_REDDIT_LIST_SUCCESS, data: {} }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.fetchRedditListPending).to.be.false;
  });

  it('handles action type EXAMPLES_FETCH_REDDIT_LIST_FAILURE correctly', () => {
    const prevState = { fetchRedditListPending: true };
    const state = reducer(
      prevState,
      { type: EXAMPLES_FETCH_REDDIT_LIST_FAILURE, data: { error: new Error('some error') } }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.fetchRedditListPending).to.be.false;
    expect(state.fetchRedditListError).to.exist;
  });

  it('handles action type EXAMPLES_FETCH_REDDIT_LIST_DISMISS_ERROR correctly', () => {
    const prevState = { fetchRedditListError: new Error('some error') };
    const state = reducer(
      prevState,
      { type: EXAMPLES_FETCH_REDDIT_LIST_DISMISS_ERROR }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.fetchRedditListError).to.be.null;
  });
});
