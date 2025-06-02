import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../src/components/NumberOfEvents";

describe('<NumberOfEvents/> component', () => {

  let NumberOfEventsComponent;
  let input;

   beforeEach(() => {
    NumberOfEventsComponent = render(<NumberOfEvents/>);
    input = NumberOfEventsComponent.queryByRole('textbox');

   })

  test('renders the NumberOfEvents correctly', () => {
    expect(input).toBeInTheDocument();
  });

  test('default value of input field is 32', () => {
    expect(input.value).toBe('32');
  });

  test('updates input value when user types', async () => {
    const user = userEvent.setup();
    await user.type(input, `{backspace}{backspace}10`);
    expect(input.value).toBe('10');
  });

  test('calls onChange callback when input value changes', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    const setErrorAlert= jest.fn();
    NumberOfEventsComponent.rerender(<NumberOfEvents 
      onChange ={handleChange} 
      setErrorAlert={setErrorAlert} />);
    input = NumberOfEventsComponent.getByRole('textbox');

    await user.type(input, `{backspace}{backspace}20`);
    expect(handleChange).toHaveBeenCalledWith('20');

  });
})