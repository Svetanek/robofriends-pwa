import React from 'react';
import { shallow, mount, render } from 'enzyme';
import MainPage from './MainPage';

let wrapper;

beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    pending: false,
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});

it('renders MainPage without crashing', () => {
  expect(wrapper).toMatchSnapshot();
});
// wrapper.instance() gives acces to instance methods
it('filters robots correctly1', () => {
  const mockProps1 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: 'John',
        email: 'john@gmail.com',
      },
    ],
    searchField: 'John',
    pending: false,
  };
  const wrapper1 = shallow(<MainPage {...mockProps1} />);
  expect(wrapper1.instance().filterRobots()).toEqual([
    {
      id: 3,
      name: 'John',
      email: 'john@gmail.com',
    },
  ]);
});

it('filters robots correctly2', () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: 'John',
        email: 'john@gmail.com',
      },
    ],
    searchField: 'a',
    pending: false,
  };
  const filteredRobots = [];
  const wrapper2 = shallow(<MainPage {...mockProps2} />);
  expect(wrapper2.instance().filterRobots()).toEqual(filteredRobots);
});
// it('expect to render MainPage component', () => {
//   expect(shallow(<CounterButton store={mockStore} />)).toMatchSnapshot();
// });
