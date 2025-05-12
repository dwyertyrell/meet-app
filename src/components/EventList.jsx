import React from 'react';
import Event from './Event';
import PropTypes from 'prop-types';

/* we could add an initial state on the events prop- so there will always be a value to render;
or conditionally render the component only when the prop is truthy.  */
const EventList = ({events}) => {
  return (
    <ul id="event-list">
      { events ? (
        //the <Event/> component is simply being used as a <li/> item.
      events.map(event => <Event key={event.id} event= {event}/>)
    ) : null
    }
    </ul>
  );
}


export default EventList;

// EventList.PropTypes = {
//   events: propTypes.shape({
    
//   })
// }
