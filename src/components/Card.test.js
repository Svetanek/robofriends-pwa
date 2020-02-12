import React from 'react';
import { shallow, mount, render } from 'enzyme';
//mount - full DOM rendering, to test components that interact with the DOM or to test lifecycle methods like ComponentDidMount, requires full DOM Api. Better to test using headless browser or JS DOM.

//render - renders to a static HTML, uses a library Cheerio, renders children unlike the 'shallow'
import Card from './Card';
it('expect to render Card componnent', () => {
  expect(shallow(<Card />).length).toEqual(1);
});
it('expect to render Card component', () => {
  expect(shallow(<Card />)).toMatchSnapshot();
});
