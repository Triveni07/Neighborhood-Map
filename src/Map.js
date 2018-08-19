
import React from 'react';
import { compose, withProps } from 'recompose';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    InfoWindow
} from 'react-google-maps';
import PropTypes from 'prop-types';

/**
 * Represent the Google map, with markers and info windows.
 * For each location, add and show a marker on the map.
 * When a marker is clicked, pass a call to open the InfoWindow showing
 * additional details for that location.
 */
const Map = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCW83YC217OdmY33WAmZqeFGr9DiCfbKAw",
        loadingElement: <div style={{ height: '100%' }} />,
        containerElement: <div style={{ height: '100%' }} />,
        mapElement: <div style={{ height: '100%' }} />,
    }),
    withScriptjs,
    withGoogleMap
)((props) =>
    <GoogleMap
        defaultZoom={14}
        defaultCenter={props.center}>

        {props.isMarkerShown && props.markers.map((marker) => {
            return (
                <Marker key={marker.id}
                    title={marker.name}
                    position={{
                        lat: Number(marker.location.lat),
                        lng: Number(marker.location.lng)
                    }}

                    // Animate the marker when a location is selected 
                    animation={props.location.id === marker.id && props.animation}
                    onClick={() => props.onClickMarker(marker)}>

                    {props.location.id === marker.id &&
                        <InfoWindow onCloseClick={() => props.onClickMarker(marker)}>
                            <div tabIndex="0" id="info-window">
                                <h1>{marker.name}</h1>
                                {marker.categories.map((category) => {
                                    return (<h2 key={category.id}> {category.name} </h2>)
                                })}
                                <p>{marker.location.address}</p>
                            </div>
                        </InfoWindow>
                    }
                </Marker>
            )
        })
        }
    </GoogleMap>
)

Map.propTypes = {
    googleMapURL: PropTypes.string,
    loadingElement: PropTypes.element,
    containerElement: PropTypes.element,
    mapElement: PropTypes.element,
    isMarkerShown: PropTypes.bool,
    markers: PropTypes.arrayOf(PropTypes.object).isRequired,
    location: PropTypes.object,
    animation: PropTypes.number,
    onClickMarker: PropTypes.func.isRequired
}

export default Map;
