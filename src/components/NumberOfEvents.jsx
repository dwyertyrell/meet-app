import React, {useState} from "react";
import PropTypes from 'prop-types';

const NumberOfEvents = ({defaultValue= 32, onChange, setErrorAlert= ()=>{} }) => {

  const [value, setValue] = useState(defaultValue)

  const handleInputChange = (event) => {
     const newValue = event.target.value;

    if (isNaN(newValue) || newValue <= 0 ) {
      setValue(newValue)
      setErrorAlert('please enter a number greater than 0')      
    } else {
      setValue(newValue);
      setErrorAlert('') 
    }
   


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


NumberOfEvents.propTypes = {
  defaultValue: PropTypes.number,
  onChange: PropTypes.func,
  setErrorAlert: PropTypes.func,
};