import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Event from '../src/components/Event';
import { getEvents } from "../src/app";

describe('<Event/> component', () => {

  let EventComponent;
  let allEvents;

  beforeEach( async () => {
    allEvents = await getEvents();
    EventComponent = render(<Event event = {allEvents[0]}/>) 
  });

  test('renders event summary correctly', () => {
    expect(EventComponent.queryByText(allEvents[0].summary)).toBeInTheDocument(); 
  });

  test('renders event\'s start time correctly', () => {
    expect(EventComponent.queryByText(allEvents[0].created)).toBeInTheDocument();

  });

  test('renders event location correctly', () => {
    expect(EventComponent.queryByText(allEvents[0].location)).toBeInTheDocument();
  });


  test('user can expand an event to see details', async () => {
    const user = userEvent.setup();
    

    //user can click the 'Show Details' button
    const showDetailsButton = EventComponent.queryByText('Show Details');
    await user.click(showDetailsButton);

    //user can click the 'Hide Details' button
    const hideDetailsButton = EventComponent.queryByText('Hide Details');
    await user.click(hideDetailsButton);

    // ensure the event's details are not visible 
    expect(EventComponent.queryByText(allEvents[0].description)).not.toBeInTheDocument();
    
  });


})