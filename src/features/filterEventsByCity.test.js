// step definition files are written in js by jest
import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App.jsx'
import { getEvents } from '../api.js';

/*Acceptance test for feature 1 */

//to load a gherkin file
const feature = loadFeature('./src/features/filterEventsByCity.feature');

//to define the code for that file
defineFeature(feature, test => {
 test('When user hasn’t searched for a city, show upcoming events from all cities', ({ given, when, then }) => {
        given('I am on the events page', () => {
          //does not require any code- due to no user interaction
        });

        let AppComponent;

        when('the user opens the app', () => {
          AppComponent = render(<App/>)
        

        });

        then('I should see upcoming events from all cities', async () => {
          const AppDOM = AppComponent.container.firstChild;
          const EventListDOM = AppDOM.querySelector('#event-list');

          await waitFor(() => {
            const EventListItems = within(EventListDOM).queryAllByRole('listitem');
            expect(EventListItems.length).toBe(32);
          });
        });
    });

    test('User should see a list of suggestions when they search for a city', ({ given, when, then }) => {
        let AppComponent; 
        given('the user is on the main page', () => {
            // setup code
            AppComponent = render(<App/>);
        });

        let CitySearchDOM;
        when('the user starts typing in the city search box', async () => {
            // action code
            const user = userEvent.setup();
            const AppDOM = AppComponent.container.firstChild;
            CitySearchDOM = AppDOM.querySelector('#city-search');
            const citySearchInput = within(CitySearchDOM).queryByRole('textbox');
            await user.type(citySearchInput, 'Berlin');
             
        });

        then('the user should see a list of suggested cities that match what they\'ve typed', async () => {
            // assertion code- for the expected outcome
            const suggestionListItems = within(CitySearchDOM).queryAllByRole('listitem');
            expect(suggestionListItems).toHaveLength(2); // the desired city, and 'see all cities' <li> tags


        });
    });

    test('User can select a city from the suggested list', ({ given, and, when, then }) => {
      let AppComponent;
      let AppDOM;
      let CitySearchDOM;
      let citySearchInput;

        given('the user was typing in the city search box', async () => {
            /*  setup code- given that the user types in 'berlim' in the node containing 
             id='city-search' */
          AppComponent = render(<App/>);
          AppDOM = AppComponent.container.firstChild;
          const user = userEvent.setup();
          CitySearchDOM = AppDOM.querySelector('#city-search');  
          citySearchInput = within(CitySearchDOM).queryByRole('textbox'); 
          
          await user.type(citySearchInput, 'Berlin');
        });

        let suggestionListItems;
        and('the list of suggested cities is displayed', () => {
            // setup code
             suggestionListItems = within(CitySearchDOM).queryAllByRole('listitem');
             expect(suggestionListItems.length).toBe(2)



        });

        when('the user selects a city from the list', async () => {
            // action code
            const user = userEvent.setup();
            await user.click(suggestionListItems[0]);
        });

        then('their city should be changed to that city', () => {
            // assertion code
            expect(citySearchInput.value).toBe('Berlin, Germany');
        });

        and('the user should receive a list of upcoming events in that city', async () => {
            // additional assertions
            const EventListDOM = AppDOM.querySelector('#event-list');
            const EventListItems = within(EventListDOM).queryAllByRole('listitem');
            const allEvents = await getEvents();

            //filtering the list of events down to events location in Germany
            waitFor( () => {
            const berlinEvents = allEvents.filter(event => event.location === citySearchInput.value)
            // if (EventListItems) {
            // EventListItems.map((event)=> {
            //   expect(event.location).toBe('Berlin, Germany')
            //   console.log(event.location)
            // })}
          
            
            //falsey positive value over here
            expect(EventListItems).toHaveLength(berlinEvents.length);
          })
    
        });
    });

});