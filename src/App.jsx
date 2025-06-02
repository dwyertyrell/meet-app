import React, {useState, useEffect} from 'react';
import EventList from './components/EventList';
import CitySearch from './components/CitySearch';
import NumberOfEvents from './components/NumberOfEvents';
import {getEvents, extractLocations} from './api.js'
import { ErrorAlert, InfoAlert } from './components/Alert.jsx';


const App = () => {
  const [numberOfEvents, setNumberOfEvents] = useState(32);
  const [events, setEvents] = useState([]);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState('See all cities');
  // const [loading, setLoading] = useState(true); remove logic for loading state
  const [infoAlert, setInfoAlert] = useState('');
  const [errorAlert, setErrorAlert] = useState('');

  useEffect(() => {


 const fetchData = async () => {
    try {
      /*upon render, load either a full list of events, or filtered events by their location
      the child components will update the setter functions of the state variables*/
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
    errorAlert.length === 0 ? (
      setNumberOfEvents(Number(value)) 
    ) : null;
  };

  return (
      <div>    
        <div className='alert-container'>
          {/*using the inforAlert state to pass text into the component. pass its
          setter function into <CitySearch/> to update its text*/}
          {infoAlert.length ? (
            <InfoAlert text={infoAlert}/>
          ): 
          errorAlert.length ? (
           <ErrorAlert text= {errorAlert}/>
           ): 
           null} 
           </div>     
        <CitySearch 
        allLocations={allLocations} 
        setCurrentCity={setCurrentCity}
        setInfoAlert={setInfoAlert}
        /> 
        <NumberOfEvents 
        defaultValue={numberOfEvents} 
        onChange={handleNumberOfEventsChange}
        setErrorAlert={setErrorAlert}
        />
        <EventList events={events} /> 
      </div>
  );
}

export default App;


