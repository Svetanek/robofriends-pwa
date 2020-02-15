import { apiCall } from './api/api';
import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from './constants';

const requestPending = () => ({ type: REQUEST_ROBOTS_PENDING });
const requestSuccess = data => ({
  type: REQUEST_ROBOTS_SUCCESS,
  payload: data,
});
const requestFailed = error => ({
  type: REQUEST_ROBOTS_FAILED,
  payload: error,
});

export const setSearchField = text => ({
  type: CHANGE_SEARCHFIELD,
  payload: text,
});
//should be a function inside a function
export const requestRobots = () => dispatch => {
  dispatch(requestPending());
  apiCall('https://jsonplaceholder.typicode.com/users')
    .then(data => dispatch(requestSuccess(data)))
    .catch(error => dispatch(requestFailed(error)));
};
