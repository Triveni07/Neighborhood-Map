import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';

class Map extends Component {

    render() {
        // load the googleMapUrl and api key withScriptJS HOC in react-google-maps 
        const NeighborhoodMap = withScriptjs(withGoogleMap(props =>
            <GoogleMap
                defaultZoom={10}
                defaultCenter={{ lat: 59.3293, lng: 18.0686 }}>
            </GoogleMap>
        ));

        return (
            <div>
                <NeighborhoodMap
                    googleMapURL="https://maps.googleapis.com/maps/api/js?libraries=places,geometry,drawing&key=AIzaSyCW83YC217OdmY33WAmZqeFGr9DiCfbKAw&v=3&callback=initMap"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />

            </div>

        );

    }
};
export default Map;