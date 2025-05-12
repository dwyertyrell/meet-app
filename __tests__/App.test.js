// import { render } from '@testing-library/react';
// import React from 'react';
// import App from '../src/App.jsx';

// /*npm run test  */
// describe('<App /> component', () => {
// /*
// beforeEach() code;
// The first test;
// beforeEach() code;
// The second test. */


// let AppDOM;
// let rootDOMNode;

// beforeEach(() => {
//   AppDOM = render(<App/>);
//   rootDOMNode = AppDOM.container.firstChild;  
//   // AppDOM.debug();

// })


// test('renders list of events', () => {
//   expect(rootDOMNode.querySelector('#event-list')).toBeInTheDocument();
// });

// test('render CitySearch', () => {
// expect(rootDOMNode.querySelector('#city-search')).toBeInTheDocument();
// });


// });



import React from "react";
import { render, waitFor } from "@testing-library/react";
import App from "../src/App.jsx";
import { getEvents } from "../src/app.js";
import { mockData } from "../src/mock-data.js";

// Mock the getEvents function
jest.mock("../src/app.js", () => ({
  getEvents: jest.fn(),
}));

describe("<App /> component", () => {
  beforeEach(() => {
    // Mock implementation of getEvents to return test data
    getEvents.mockResolvedValue(mockData);
  });

  test("renders list of events", async () => {
    const { container } = render(<App />);

    // Wait for the event list to appear after fetching
    await waitFor(() => {
      const eventList = container.querySelector("#event-list");
      expect(eventList).toBeInTheDocument();
    });
  });

  test("renders CitySearch", async () => {
    const { container } = render(<App />);

    // Wait for the city search component to appear
    await waitFor(() => {
      const citySearch = container.querySelector("#city-search");
      expect(citySearch).toBeInTheDocument();
    });
  });

  //logic for loading state needs failed. refactor this
  // test("renders loading message initially", () => {
  //   const { getByText } = render(<App />);
  //   const loadingMessage = getByText("Loading events...");
  //   expect(loadingMessage).toBeInTheDocument();
  // });
});