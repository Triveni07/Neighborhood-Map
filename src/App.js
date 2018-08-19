import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import Map from './Map';
import './App.css';
class App extends Component {

    state = {
        venues: [],// locations retrieved from foursquare
        defaultPosition: [],
        searchedLocations: [],
        location: {}, // to get specific location
        animation: null, // animation for marker
    }

    componentDidMount() {
        //set location state to desired location position lat and lng values
        this.setState({
            defaultPosition: {
                lat: 59.3293,
                lng: 18.0686
            }
        })
        //Using foursquare api we can fetch any venues details 
        const foursquare = require('react-native-foursquare-api')({
            url: 'GET https://api.foursquare.com/v2/venues/VENUE_ID',
            clientID: 'PBU1RAVSZOZIJAQOMQYJAIDOMEWAGQZEFJA12XESMIOPEB5E',
            clientSecret: 'G4E3LMBP1CB4IJCPXG34RHWUVCIZ3A1VWBVRRLU021GHVXDK',
            style: 'foursquare',
            version: '20140806'
        });

        //Query details to get the desired venues in or nearby default positioned location
        const venueQueryDetails = {
            "ll": "59.3293, 18.0686",
            "query": 'park',
            "limit": 30 //to set the limit on query
        };

        foursquare.venues.getVenues(venueQueryDetails)
            .then((result) => {
                console.log(result.response.venues);
                this.setState({
                    venues: this.state.venues.concat(result.response.venues),
                    searchedLocations: this.state.venues.concat(result.response.venues)
                });
            })
            .catch((err) => {
                console.log(err);
            });

    }

    handleOnClickMarkerToggle = (marker) => {
        this.setState({
            location: marker,
            animation: 1
        })
        setTimeout(() => {
            this.setState({
                animation: null
            })
        }, 2000)
    }

    render() {
        return (
            <div className="App">
                <MetaTags>
                    <title>Neighborhood Map</title>
                    <meta name="description" content="Google Maps API Tool to display neighborhood area map" />
                    <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
                    <meta charSet="utf-8" />
                </MetaTags>

                <header className="App-header">
                    <h1 tabIndex="0" className="App-title">Neighborhood Map</h1>
                </header>

                <p className="App-intro">
                    Visit nearby places in Stockholm, Sweden.
                </p>

                <main role="main">
                    <section>
                        <div id="map-container">
                            <Map
                                isMarkerShown
                                center={this.state.defaultPosition}
                                markers={this.state.venues}
                                animation={this.state.animation}
                                location={this.state.location}
                                onClickMarker={this.handleOnClickMarkerToggle} />
                        </div>
                    </section>
                </main>

                <footer tabIndex="0" className="footer">
                    Stockholm city map provided by Google Maps API
                </footer>
            </div>
        );
    }
}

export default App;
