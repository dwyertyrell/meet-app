import React from "react";
import { loadFeature, defineFeature } from "jest-cucumber";
import { render, within, waitFor } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

// Acceptance test for "Specify Number of Events" feature
const feature = loadFeature('src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  let AppComponent;
  let AppDOM;
  let EventListDOM;
  let EventListItems;

  test("When user hasn't specified a number, 32 events are shown by default", ({ given, when, then }) => {
    given("the user hasn't changed any event settings", () => {
      // Initial state, no interaction
    });

    when("the user opens the events list", () => {
      AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;
      EventListDOM = AppDOM.querySelector('#event-list');
    
    });

    then("32 events should be displayed by default", async () => {
        await waitFor(() => {
        EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(32);
      });
    });
  });

  test("User can change the number of events displayed", ({ given, when, then }) => {
    let numberInput;
    let newNumber = 10; // The number the user will specify

    given("the user is viewing the events list", async () => {
      AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;
      EventListDOM = AppDOM.querySelector('#event-list');
      await waitFor(() => {
        EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBeGreaterThan(0);
      });
      // Find the input by its unique id or class if available, otherwise by type and id together
      numberInput = AppDOM.querySelector('input#number-input[type="number"]');
      expect(numberInput).toBeInTheDocument();
    });

    when("the user selects to show a different number of events", async () => {
      const user = userEvent.setup();
      await user.clear(numberInput);
      await user.type(numberInput, newNumber.toString());
    });

    then("the specified number of events should be displayed", async () => {
      await waitFor(() => {
        EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(newNumber);
      });
    });
  });
});