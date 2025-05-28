import React from "react";
import { loadFeature, defineFeature } from "jest-cucumber";
import { render, within, waitFor } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";


//Acceptance test for feature 2
const feature = loadFeature('src/features/showHideEventDetails.feature');

defineFeature(feature, test => {
    let AppComponent;
    let AppDOM;
    let EventListDOM;
    let EventListItems

  test('An event element is collapsed by default', ({given, when, then, and }) => {

    given('the user is viewing the events list', () => {
      AppComponent = render(<App/>)
      AppDOM= AppComponent.container.firstChild;
    });

    when('the events are loaded', async () => {
      //wait for the events to load
      EventListDOM = AppDOM.querySelector('#event-list');
      await waitFor(() => {
        EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBeGreaterThan(0);
      });
    });

    then('all event details should be hidden', () => {
      //a test can be ran on each individual element of a DOM node array
      // the value of EventListItems can be accessed from the when()- since it was initially declared in the glboal scope 
      EventListItems.forEach((eventItem) => {
        const details = within(eventItem).queryByText((content, node)=>{
          node.tagName.toLowerCase() === 'p' && node.classList.contains('details')
        }); 
        expect(details).not.toBeInTheDocument();
      });
    });

    and('only event titles should be visible', () => {
      EventListItems.forEach((eventItem) => {
        const title = within(eventItem).getByRole('heading', {level: 3});
        expect(title).toBeInTheDocument();
      });
    });
  });

  test('User can expand an event to see details', ({given, when, then, and}) => {
    let targetEventItem;
    // let eventId='4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z' // passing over the event if of the targetElement, for testing
    
    given('the user is viewing the events list', async() => {
      AppComponent = render(<App/>);
      AppDOM = AppComponent.container.firstChild;
      EventListDOM = AppDOM.querySelector('#event-list');

      await waitFor(() => {
        EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBeGreaterThan(0);
      });
      targetEventItem= EventListItems[0];
    });

    and('an event is collapsed', () => {
      // const details = within(targetEventItem).getElementById(`details-${eventId}`)
      const details = targetEventItem.querySelector('.details')
      expect(details).not.toBeInTheDocument();
    });

    when('the user clicks on "show details" button for an event', async() => {
      const user = userEvent.setup();
      const showButton = within(targetEventItem).queryByRole('button');
      expect(showButton).toBeInTheDocument();
      await user.click(showButton);
    });

    then('the event details should be displayed', async () => {
      await waitFor(() => {
        const details = targetEventItem.querySelector('.details');
        expect(details).toBeInTheDocument();
      });
    });
  });

  test('User can collapse an event to hide details', ({given, when, then, and}) => {
    let targetEventItem;

    given('the user is viewing the events list', async () => {
      AppComponent = render(<App/>);
      AppDOM = AppComponent.container.firstChild;
      EventListDOM = within(AppDOM).getByRole('list');
      await waitFor(() => {
        EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBeGreaterThan(0);
      });
      targetEventItem = EventListItems[0];
    });

    and('an event is expanded showing its details', async () => {
      const user = userEvent.setup();
      const showButton = within(targetEventItem).getByRole('button', {name: /show details/i });
      await user.click(showButton);
      await waitFor(() => {
        const details = targetEventItem.querySelector('.details-button');
        expect(details).toBeInTheDocument();
      });
    });

    when('the user clicks on "hide details" button for the event', async () => {
      const user = userEvent.setup();
      const hiddenButton = within(targetEventItem).getByRole('button', {name:/hide details/i});
      await user.click(hiddenButton);
    });

    then('the event details should be hidden', async () => {
      await waitFor(() => {
        const details = targetEventItem.querySelector('.details');
        expect(details).not.toBeInTheDocument();
      })
    })
  })





})