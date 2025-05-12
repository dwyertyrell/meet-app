import React, {useState} from "react";
import {PropTypes as propTypes} from "prop-types";

const Event = ({event}) => {
  const [detailsVisible, setDetailsVisible] = useState(false);

  const toggleDetails = () => {
    setDetailsVisible(!detailsVisible)
  };

return (
  <li>
    <h3>{event.summary}</h3>
    <p>{event.created}</p>
    <p>{event.location}</p>
    
    {detailsVisible && <p>{event.description}</p>}

    <button onClick={toggleDetails}>
      {detailsVisible ? 'Hide Details' : 'Show Details'}
    </button>
    
  </li>
)
} 
export default Event

Event.propTypes = {
  event: propTypes.shape({
    summary: propTypes.string.isRequired,
    created: propTypes.string.isRequired,
    location: propTypes.string.isRequired,
    description:propTypes.string.isRequired,
  })
}