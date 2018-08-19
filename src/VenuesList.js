import React from 'react';
import Location from './Location';
import PropTypes from 'prop-types';

/**
 * Represent a list of venues and a search element to filter venues
 * on the list and also markers for those venues on the map.
 */
const VenuesList = (props) => (
    <div className="location-list">
        <h2 tabIndex="0">Stockholm : The Frozen World</h2>
        <div role="search">
            <label role="filter"> </label>
            <input type="text"
                name="filter"
                className="search-box"
                placeholder="Search venue by name"
                value={props.query}
                onChange={(event) => props.onSearchQuery(event.target.value)} />
        </div>
        <ul>
            {props.filters.map((marker) => (
                <li key={marker.id}>
                    <Location marker={marker}
                        onToggleMarker={props.onClickMarker} />
                </li>
            ))}
        </ul>
    </div>
)

VenuesList.propTypes = {
    markers: PropTypes.arrayOf(PropTypes.object).isRequired,
    onClickMarker: PropTypes.func.isRequired,
    query: PropTypes.string,
    onSearchQuery: PropTypes.func.isRequired
}


export default VenuesList;
