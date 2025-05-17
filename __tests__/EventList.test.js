import React from 'react';
import { render, waitFor, within } from '@testing-library/react';
import EventList from '../src/components/EventList'
import { getEvents } from '../src/api.js';
import App from '../src/App.jsx';

describe('<EventList /> component', () => {

  let EventListComponent;
  let allEvents;

  beforeEach(async ()=> {
    allEvents = await getEvents();
    EventListComponent = render(<EventList events={allEvents}  />);
  })

  //test for the "list" role in the <EventList/>
  test('has an element with "list" role', () => {
    expect(EventListComponent.queryByRole("list")).toBeInTheDocument();
  });

  test('has elements with "listitem" role',  () => {
    EventListComponent.debug();
    expect(EventListComponent.getAllByRole("listitem")).toHaveLength(allEvents.length);
  });

  test('renders event summary, start time, location for each event', () => {

    allEvents.forEach((element) => {
      expect(EventListComponent.queryByText(element.summary)).toBeInTheDocument();
      expect(EventListComponent.queryByText(element.created)).toBeInTheDocument();
      expect(EventListComponent.queryByText(element.location)).toBeInTheDocument();
    });
  })
});

//similar to unit testing, expect that we are testing the same logic of the child component, inside the DOM of the parent component 
describe('<EventList/> integration', () => { 

  test('renders a list of 32 events when app is mounted and rendered', async () => {
    const AppComponent = render(<App/>);
    const AppDOM = AppComponent.container.firstChild;
    const EventListDOM = AppDOM.querySelector('#event-list'); //to query the <ul> element

    await waitFor(()=> { // waitFor() keeps re-calling the callback until the code passes.
      const EventListItems = within(EventListDOM).queryAllByRole('listitem'); // if the the EventListDOM passes, we (use the type of queries on the returned object render() ) query the <li> elements from within the DOM node of EventListDOM
      expect(EventListItems).toHaveLength(2);
    });
  })

})