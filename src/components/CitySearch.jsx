import React from "react";
import { useState } from "react";

const CitySearch = ({allLocations}) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChanged = (event) => {
    const value = event.target.value;
    const filteredLocations = allLocations ? allLocations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1; }) : [];
    //the event of the onChange will be made as the input value. 
    setQuery(value)
    //if the user input's value is an index of elements in the allLocations array, 
    // it will be added to the local state array, and rendered in a list.
    setSuggestions(filteredLocations);
  }

  return (
    <div>
      <div id='city-search'></div>
      <input  
        className='city' 
        type='textbox'
        value={query}
        onFocus={()=>{setShowSuggestions(true)}}
        onChange={handleInputChanged}

      ></input>
    { showSuggestions ? (<ul className='suggestions'>
      {/* once the local state is updated with the filteredLocations, map it inside the <ul> as listitems  */}
      {suggestions.map((suggestion) => {
        return <li key={suggestion}>{suggestion}</li>
      })}
      <li key='see all cities'>see all cities from suggestions</li>
    </ul>) : null}
    </div>
  )
}
export default CitySearch;