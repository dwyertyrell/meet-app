import { render } from '@testing-library/react';
import React from 'react';
import App from '../src/App';

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
})


test('renders list of events', () => {
  AppDOM.debug();
  expect(rootDOMNode.querySelector('#event-list')).toBeInTheDocument();
});

test('render CitySearch', () => {
AppDOM.debug();
expect(rootDOMNode.querySelector('#city-search')).toBeInTheDocument();
});


});

