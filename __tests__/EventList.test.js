import React from 'react';
import { render } from '@testing-library/react';
import EventList from '../src/components/EventList'


describe('<EventList /> component', () => {

  //test for the "list" role in the <EventList/>
  test('has an element with "list" role', () => {
    const EventListComponent = render(<EventList />);
    EventListComponent.debug();
    expect(EventListComponent.queryByRole("list")).toBeInTheDocument();
  });

  test('has elements with "listitem" role', () => {
    const EventListComponent = render(<EventList events={[{id: 1}, {id: 2}, {id: 3}, {id: 4}]} />);
    EventListComponent.debug();
    expect(EventListComponent.getAllByRole("listitem")).toHaveLength(4);
  })
});