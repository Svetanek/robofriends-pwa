import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from './constants';
import * as reducers from './reducers';

describe('searchRobots reducer', () => {
  const initialStateSearch = {
    searchField: '',
  };
  it('should return the initial state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: '' });
  });

  it('should handle the CHANGE_SEARCHFIELD action', () => {
    expect(
      reducers.searchRobots(initialStateSearch, {
        type: CHANGE_SEARCHFIELD,
        payload: 'abc',
      })
    ).toEqual({
      searchField: 'abc',
    });
  });
});

describe('requestRobots reducer', () => {
  const initialStateRobots = {
    robots: [],
    isPending: false,
  };
  it('should return the initial state', () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
  });

  it('should handle REQUEST_ROBOTS_PENDING action', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_PENDING,
        payload: true,
      })
    ).toEqual({
      robots: [],
      isPending: true,
    });
  });

  it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: [
          {
            id: '123',
            name: 'robot123',
            email: 'robot123@gmail.com',
          },
        ],
      })
    ).toEqual({
      robots: [
        {
          id: '123',
          name: 'robot123',
          email: 'robot123@gmail.com',
        },
      ],
      isPending: false,
    });
  });

  it('should handle REQUEST_ROBOTS_PENDING action', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_FAILED,
        payload: 'Oh, No! Request failed',
      })
    ).toEqual({
      error: 'Oh, No! Request failed',
      robots: [],
      isPending: false,
    });
  });
});
