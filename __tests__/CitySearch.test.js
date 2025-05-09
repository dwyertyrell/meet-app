import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CitySearch from "../src/components/CitySearch";
import {getEvents, extractLocations} from '../src/app.js'

/*the virtual DOM created by the render object cannot chain with querySelector methods.
these methods only work with real DOM node- used for targeting low level CSS in the DOM.
queryByRole is a method used for testing react components and their behaviour.
*/

 //'user': with this etup, i can perfom actions like click type, hover, etc.

describe('<CitySearch/> component', ()=> {

  let CitySearchComponent;
  beforeEach(() => {
    CitySearchComponent = render(<CitySearch/>);
    // CitySearchComponent.debug();
  });

  test('renders text input', () => {
    const cityTextBox = CitySearchComponent.queryByRole('textbox');
    expect(cityTextBox).toBeInTheDocument();
    expect(cityTextBox).toHaveClass('city');
  });

  test('suggestions list is hidden by default', () => {
   const suggestionList = CitySearchComponent.queryByRole('list');
    expect(suggestionList).not.toBeInTheDocument();    
  });

  test('renders a list of suggestions when city textbox gains focus', async () => {
    const user = userEvent.setup();
    const cityTextBox = CitySearchComponent.queryByRole('textbox');

    await user.click(cityTextBox); //'await' keyword ensures that the test waits for this action to complete before moving on to the next line
    const suggestionList = CitySearchComponent.queryByRole('list');
    expect(suggestionList).toBeInTheDocument();
    expect(suggestionList).toHaveClass('suggestions');
  });

  test('updates list of suggestion correctly when user types city in textbox', async () => {
    //never add the userEvent object in the beforeEach() or beforeAll() hook
    const user = userEvent.setup();
    //the two variable values were imported from the app.js file to fulfil the test 
    // allEvents returns the mockData array.
    const allEvents = await getEvents();
    //extract location of each event in allEvents. 
    const allLocations = extractLocations(allEvents);
    CitySearchComponent.rerender(<CitySearch allLocations={allLocations}/>);

    //user types 'Berlin' in textbox- the <input/> element in the <CitySearch/>
    const cityTextBox = CitySearchComponent.queryByRole('textbox');
    await user.type(cityTextBox, 'Berlin');

    //filter allLocations to locations matching 'Berlin'
    const suggestions = allLocations ? allLocations.filter(location => {
      return location.toUpperCase().indexOf(cityTextBox.value.toUpperCase()) > -1; }) : [] 
      //indexOf() checks what index the first letter of user input's value starts, 
      // in 'location' element. Will evaluates to a number on the zero-index position. 
      // If not, then it returns -1

      //get all <li> elements inside the suggestion list.
      const suggestionListItems = CitySearchComponent.queryAllByRole('listitem');
      //expect to have each suggestion filtered from the allLocations using user's input, to each have own <li> element
      expect(suggestionListItems).toHaveLength(suggestions.length + 1);
      //making sure each <li> element from filtering the allLocations array contain the same text value as each suggestions.
      for (let i= 0; i < suggestions.length; i+= 1) {
        expect(suggestionListItems[i].textContent).toBe(suggestions[i]); 
      }
    });
  })
