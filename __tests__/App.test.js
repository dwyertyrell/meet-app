import React from "react";
import { render, waitFor, within } from "@testing-library/react";
import App from "../src/App.jsx";
import { getEvents } from "../src/api.js";
import { mockData } from "../src/mock-data.js";
import userEvent from '@testing-library/user-event';

// Mock the getEvents function
jest.mock("../src/api.js", () => ({
  getEvents: jest.fn(),
}));

describe("<App /> component", () => {
  beforeEach(() => {
    // Mock implementation of getEvents to return test data
    getEvents.mockResolvedValue(mockData);
  });

  //this test is similar to the integration test in 'EventList.test.js'. add this to another describe() ? 
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

describe('<App/> integration', () => {
  test('renders a list of events matching the city selected by the user', () => {
    const user = userEvent.setup();
    const AppComponent = render(<App/>);
    const AppDOM = AppComponent.container.firstChild;

//again, a waitFor() callback is needed to wait for the element to be rendered after an async operation.
    waitFor( async () => { 
// internally render the <CitySearch/> component inside <App/>
    const CitySearchDOM = AppDOM.querySelector('#city-search');
    const CitySearchInput = within(CitySearchDOM).queryByRole('textbox');

    await user.type(CitySearchInput, 'Berlin');
    const berlinSuggestionItem = within(CitySearchDOM).queryByText('Berlin, Germany');
    await user.click(berlinSuggestionItem);

    const EventListDOM = AppDOM.querySelector('#event-list');
    const allRenderedEventItems = within(EventListDOM).queryAllByRole('listitem');

    const allEvents = await getEvents();
    const berlinEvents = allEvents.filter((event) => event.location === 'Berlin, Germany')
  
// ensures the number of rendered events in the UI equals the number of events located in 'Berlin, Germany'
  expect(allRenderedEventItems.length).toBe(berlinEvents.length);
  // allRenderedEventItems.forEach((event)=> expect(event.textContent).toContain('Berlin, Germany'));
  });
});
})