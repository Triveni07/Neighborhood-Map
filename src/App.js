import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import Map from './Map';
import VenuesList from './VenuesList';
import VenuesErrorBoundary from './VenuesErrorBoundary';
import MapErrorBoundary from './MapErrorBoundary';
import escapeRegExp from 'escape-string-regexp';
import './App.css';
class App extends Component {

    state = {
        venues: [],// locations retrieved from foursquare
        defaultPosition: [],
        searchedLocations: [],
        location: {}, // to get specific location
        animation: null, // animation for marker
        error: null
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
        //To catch an error inside event handler
        try {
            this.setState({
                location: marker,
                animation: 1
            })
            setTimeout(() => {
                this.setState({
                    animation: null
                })
            }, 2000)
        } catch (error) {
            this.setState({ error });
        }
    }

    updateSearchFilter = (query) => {
        try {
            if (query) {
                this.setState({ query: query })
                const nameMatch = new RegExp(escapeRegExp(query), 'i')
                this.setState({
                    searchedLocations: this.state.venues
                        .filter((marker) => nameMatch.test(marker.name))
                })
            } else {
                this.setState({
                    query: "",
                    searchedLocations: this.state.venues
                })
            }
        } catch (error) {
            this.setState({ error });
        }
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

                <header className="App-header" role="banner">
                    <h1 tabIndex="0" className="App-title">Neighborhood Map</h1>
                </header>

                <p className="App-intro">
                    Visit nearby places in Stockholm, Sweden.
                </p>

                <main>
                    <nav role="doc-index">
                        <VenuesErrorBoundary>
                            <VenuesList filters={this.state.searchedLocations}
                                onSearchQuery={this.updateSearchFilter}
                                markers={this.state.venues}
                                onClickMarker={this.handleOnClickMarkerToggle}
                            />
                        </VenuesErrorBoundary>
                    </nav>
                    <section role="application">
                        <div id="map-container">
                            <MapErrorBoundary>
                                <Map
                                    isMarkerShown
                                    center={this.state.defaultPosition}
                                    markers={this.state.venues}
                                    animation={this.state.animation}
                                    location={this.state.location}
                                    onClickMarker={this.handleOnClickMarkerToggle} />
                            </MapErrorBoundary>
                        </div>
                    </section>
                </main>

                <footer tabIndex="0" className="footer" role="contentinfo">
                    Stockholm city map provided by {' '}
                    <a href="https://developers.google.com/maps/documentation/">Google Maps API</a>
                    {' '}and venues by {' '}
                    <a href="https://foursquare.com/">Foursquare API </a>
                </footer>
            </div>
        );
    }
}

export default App;
