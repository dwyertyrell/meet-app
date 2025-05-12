import React from 'react';
import { render } from '@testing-library/react';
import EventList from '../src/components/EventList'
import { getEvents } from '../src/app';

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

