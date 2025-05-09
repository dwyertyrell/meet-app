import { render } from '@testing-library/react';
import React from 'react';
import App from '../src/App.jsx';

/*npm run test  */
describe('<App /> component', () => {
/*
beforeEach() code;
The first test;
beforeEach() code;
The second test. */


let AppDOM;
let rootDOMNode;

beforeEach(() => {
  AppDOM = render(<App/>);
  rootDOMNode = AppDOM.container.firstChild;  
  // AppDOM.debug();

})


test('renders list of events', () => {
  expect(rootDOMNode.querySelector('#event-list')).toBeInTheDocument();
});

test('render CitySearch', () => {
expect(rootDOMNode.querySelector('#city-search')).toBeInTheDocument();
});


});

