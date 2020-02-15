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
// import fetchMock from 'fetch-mock';

const mockStore = configureStore([thunkMiddleware]);

const data = {
  robots: [
    {
      id: '123',
      name: 'robot123',
      email: 'robot123@gmail.com',
    },
  ],
};

const fetchData = () => {
  return dispatch => {
    return fetch('/users').then(() => dispatch(actions.requestSuccess(data)));
  };
};

describe('async actions', () => {
  // afterEach(() => {
  //   fetchMock.restore();
  // });
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
    expect(action[0]).toEqual(expectedAction);
  });

  it('handles succes call', () => {
    const store = mockStore({});

    store.dispatch(fetchData()).then(() => {
      const action = store.getActions();
      expect(action).toEqual(actions.requestSuccess());
    });
  });

  // it('handles success call - alternative', () => {
  //   fetchMock.getOnce('https://jsonplaceholder.typicode.com/users', {
  //     body: data,
  //   });

  //   const expectedActions = [
  //     {
  //       type: REQUEST_ROBOTS_PENDING,
  //     },
  //     { type: REQUEST_ROBOTS_SUCCESS, body: data },
  //   ];

  //   const store = mockStore({});
  //   console.log('Store=', store);

  //   store.dispatch(actions.requestRobots()).then(() => {
  //     const action = store.getActions();
  //     expect(action[0]).toEqual(expectedActions);
  //   });
  // });
});
