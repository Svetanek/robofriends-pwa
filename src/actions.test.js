import * as actions from './actions';
import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from './constants';

// npm install --save-dev redux-mock-store
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureStore([thunkMiddleware]);

describe('actions', () => {
  it('should create an action to search robots', () => {
    const text = 'woohoo';
    const exptectedAction = {
      type: CHANGE_SEARCHFIELD,
      payload: text,
    };
    expect(actions.setSearchField(text)).toEqual(exptectedAction);
  });
  //same way must be in the component (here App.js) where these actions are called inside MapDispatchToProps ====> dispatch(requestRobots()), not requestRobots(dispatch).If second is true, then ==> store.dispatch(actions.requestRobots(store.dispatch));
  it('handles requesting robots API', () => {
    const store = mockStore();
    store.dispatch(actions.requestRobots());
    const action = store.getActions();
    const expectedAction = {
      type: REQUEST_ROBOTS_PENDING,
    };
    expect(action).toEqual([expectedAction]);
    // expect(action[0]).toEqual(expectedAction);
  });
});
