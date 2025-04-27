import {render} from '@testing-library/react';
import React from 'react';
import App from '../App';
// import EventList from '../components/EventList';



describe('<App/> component', () => {

  /*the description of the title */
  test('renders list of events', () => {
    const AppDOM = render(<App/>).container.firstChild;
    expect(AppDOM.querySelector('#event-list')).toBeInTheDocument();

  });
  
  // test('renders a button element', () => {
  //   const buttonDOM = render(<App/>).container.firstChild;
  //   expect(buttonDOM.querySelector('#button-element')).toBeInTheDocument();
  // })
  
});

 