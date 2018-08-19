import React from 'react';
import PropTypes from 'prop-types';

/**
 * Represent a single location for the list of locations.
 * When a location is clicked, pass the call to show the InfoWindow.
  */
const Location = (props) => (
    <div key={props.marker.id}>
        <div className="location-name"
            tabIndex="0"
            onClick={() => props.onToggleMarker(props.marker)}
            onKeyPress={() => props.onToggleMarker(props.marker)}>
            {props.marker.name}
        </div>
    </div>
)

Location.propTypes = {
    marker: PropTypes.object.isRequired,
    onToggleMarker: PropTypes.func.isRequired
}


export default Location;
