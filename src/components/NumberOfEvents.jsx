import React, {useState} from "react";

const NumberOfEvents = ({defaultValue= 32, onChange }) => {

  const [value, setValue] = useState(defaultValue)

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    // collecting the return of the handleInputChange(), to test its behaviour in jest.
    //also collecting to pass the user's input into the <App/>, to update <EventList/> 
    onChange && onChange(newValue)  
  };


  return (
    <div id='number-of-events'>
      <input
        id='number-input'
        type='number'
        value={value}
        onChange={handleInputChange}
        role='textbox'
      ></input>
    </div>
  )

}

export default NumberOfEvents;