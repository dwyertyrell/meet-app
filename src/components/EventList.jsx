import React from 'react';
import Event from './Event';
import PropTypes from 'prop-types';
// import Fake from './Fake';


const EventList = ({events}) => {
  return (
    
      <ul  id="event-list">  
        {events.map((event) => { <Event key={event.id} event={event} /> })};
      </ul>

    
);
}

export default EventList;

EventList.PropTypes = {
  events: PropTypes.array.isRequired
}



/*the <Event/> component is passed into the <EventList /> component. <Event> returns a <li> element.
 the <EventList/> would create an instance of each object in an array, using the <Event/> componnent. 
 In conclusion, this would create many list items in the <ul> element of <EventList/>.

the arrray of objects are passed into the instance of <EventList/>, in the testing file. 
please look at the screenshot for the testing file on the left, and the EventList.jsx file on the right */
