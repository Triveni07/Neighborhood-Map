import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class Map extends Component {

    render() {

        // load the googleMapUrl and api key withScriptJS HOC in react-google-maps 
        const NeighborhoodMap = withScriptjs(withGoogleMap(props =>
            <GoogleMap
                defaultZoom={11}
                defaultCenter={this.props.center}>
                <Marker
                    position={{ lat: 59.3671, lng: 17.8691 }} />
                <Marker
                    position={{ lat: 59.4541, lng: 17.9243 }} />
                <Marker
                    position={{ lat: 59.3257, lng: 18.0719 }} />
                <Marker
                    position={{ lat: 59.3270, lng: 18.1037 }} />
                <Marker
                    position={{ lat: 59.3442, lng: 18.0456 }} />
                <Marker
                    position={{ lat: 59.3346, lng: 18.0605 }} />
                <Marker
                    position={{ lat: 59.3071, lng: 18.1199 }} />

            </GoogleMap>
        ));

        return (
            <div>
                <NeighborhoodMap
                    googleMapURL="https://maps.googleapis.com/maps/api/js?libraries=places,geometry,drawing&key=AIzaSyCW83YC217OdmY33WAmZqeFGr9DiCfbKAw&v=3&callback=initMap"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    isMarkerShown />

            </div>

        );

    }
};
export default Map;