// import React from 'react';


// const App = () => {
//  return (
//    <div className="App">
//      <div id="event-list"></div>
//    </div>
//  );
// }


// export default App;

/*this test on App.jsx fails if the <div/> containoing the id="event-list" is not 
within a root div:


The error message indicates that the test received an "SVGElement" instead of an HTMLElement. 
This suggests that the implicit wrapping may involve an SVG container or some other non-standard
 element, causing the test to fail.
 
 Ensure a Single Root Element: Always wrap all child elements in a single root element 
 (e.g., <div className="App">). This approach adheres to React's best practices and ensures 
 predictable DOM structures.
 
 Why the Test Fails:
React Fragments Do Not Create a Parent DOM Node:

When you use <React.Fragment>, it does not create a wrapper element in the DOM. Therefore, 
the div with id="event-list" is directly rendered as a child of the component's root.
In your test code, you are using render(<App />).container.firstChild. If there is no explicit 
parent DOM node (like <div>), the .firstChild may not return the expected div containing id="event-list". 
This could result in null or an unexpected value.
Testing Library's container.firstChild:

The .firstChild is used to access the first DOM node rendered by the component. Since <React.Fragment> 
does not create a DOM node, the first child might not be what you expect or could even be null, 
depending on how the testing library processes the rendered output.*/

// import React from 'react';


// const App = () => {
//  return (
//   <>
   
//      <div id="event-list"></div>
//      </>
//  );
// }

// export default App;

import React, {useState, useEffect} from 'react';
import EventList from './components/EventList';
import CitySearch from './components/CitySearch';
import NumberOfEvents from './components/NumberOfEvents';
import {getEvents, extractLocations} from './api.js'


const App = () => {
  const [numberOfEvents, setNumberOfEvents] = useState(32);
  const [events, setEvents] = useState([]);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState('See all cities');
  // const [loading, setLoading] = useState(true); remove logic for loading state

  useEffect(() => {


 const fetchData = async () => {
    try {

      const allEvents = await getEvents();
      const filteredEvents = currentCity === 'See all cities' ? (
      allEvents 
      ) : (
        allEvents.filter((event) => event.location === currentCity) 
      )
      
        setEvents(allEvents.slice(0, numberOfEvents));  //cuts the number of array elements in the fetched array, based on the local state
      setAllLocations(extractLocations(allEvents));
    } catch (error) {
      console.error('failed to fetch events', error);
    } finally {
      // setLoading(false)
    }
  };
  // if (loading) {
  //   return <div>Loading...</div>
  // }
 fetchData();
  }, [currentCity, numberOfEvents]);
  
  const handleNumberOfEventsChange = (value) => {
    setNumberOfEvents(Number(value));
  };

  return (
      <div>        
        <NumberOfEvents defaultValue={numberOfEvents} onChange={handleNumberOfEventsChange}/>
        <EventList events={events} /> 
        <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity}/> 
      </div>
  );
}

export default App;


