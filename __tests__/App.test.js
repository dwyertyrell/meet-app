import { render } from '@testing-library/react';
import React from 'react';
import App from '../src/App';

/*npm run test  */
describe('<App /> component', () => {

//accessing the root DOM node without using the firstChild method 
  // test('renders list of events', () => {
  //   // the debug() allows the code to show in console
  //   // removing the firstChild selector allows the testing of code to be 
  //   // cleaner- since the test already expects exactly one child element, so there is no need to state this.
  //   const AppDOM = render(<App />); //the render object
  //   AppDOM.debug();
  //   const eventList = AppDOM.container.querySelector('#event-list')
  //   expect(eventList).toBeInTheDocument();
  // });


// accessing the container DOM node via destructure of the render() object.
  // test('renders list of events', () => {
  //   /*this test is for when we remove the parent node 
  //   (<div className=""></div>  ) */ 

  //   const {container} = render(<App />);
  //   expect(container.querySelector('#event-list')).toBeInTheDocument();
  // });


  //FAILED. dependency on the DOM structure (using the .firstChild method) to query through an element:
  /* Avoid Dependency on DOM Structure: Using .firstChild assumes that the only child of container 
  is the root element of your component. While this is often true, it’s better to avoid such 
  assumptions and directly query for the element you’re actually testing for.

  however! this test PASSES if the id is passed in the root element!
  
  how to use the debug() method on the test code:
  debug() is used only on the render object; render(<Component/>). therefore this method is only used 
  on the render() function. 
  cannot directly call the debug() directly on a (container.firstChild) DOM node- only on a full 
  render object.
  */

 

  test('renders list of events', () => {
    const AppDOM = render(<App />); //known as the root DOM node- contains the parent DOM node that returns the <App/>. 
    AppDOM.debug();
    const rootDOMNode = AppDOM.container.firstChild;
    expect(rootDOMNode.querySelector('#event-list')).toBeInTheDocument();
  });

test('render CitySearch', () => {
  const AppDOM = render(<App/>);
  AppDOM.debug();
  const rootDOMNode = AppDOM.container.firstChild;
  expect(rootDOMNode.querySelector('#city-search')).toBeInTheDocument();
});



});

