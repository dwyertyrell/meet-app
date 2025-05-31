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
      
      setEvents(filteredEvents.slice(0, numberOfEvents));  //cuts the number of array elements in the fetched array, based on the local state
      setAllLocations(extractLocations(allEvents));
    } catch (error) {
      console.error('failed to fetch events', error);
    } finally {
      // setLoading(false)
            // console.log('API response', events)

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
        <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity}/> 
        <NumberOfEvents defaultValue={numberOfEvents} onChange={handleNumberOfEventsChange}/>
        <EventList events={events} /> 
      </div>
  );
}

export default App;


