import React from "react";
import { render } from "@testing-library/react";
import EventList from "../components/EventList";
import Event from "../components/Event";

describe('<EventList/> componrent', () => {

  //PASSED
  test('has an element with "list" role', () => {
    const EventListComponent = render(<EventList/>);
    expect(EventListComponent.queryByRole("list")).toBeInTheDocument();
  });

//PASSED
// to have an element with "listitem" role in the <Event/>
test('renders a listitem in the <Event/>', () => {
  const EventListComponent = render(<Event/>);
  expect(EventListComponent.queryByRole("listitem")).toBeInTheDocument()
});



//FAILED
 test('renders correct number of events', () => {
    const EventListComponent = render(<EventList events={[{id:1}, {id:2}, {id:3}, {id:4}]} />);
    expect(EventListComponent.getAllByRole("listitem")).toHaveLength(4);
  });

//FAILED
// To find the listitem in the <EventList/>
// test('renders a listitem in the <EventList/>', () => {
//   const EventListComponent = render(<EventList/>);
//   expect(EventListComponent.queryByRole("listitem")).toBeInTheDocument()
// });


})


