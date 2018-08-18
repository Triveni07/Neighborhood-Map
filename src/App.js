import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import Map from './Map';
import './App.css';

class App extends Component {
    state = {
        venues: [],
        defaultPosition: []
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
            "query": ''
        };

        foursquare.venues.getVenues(venueQueryDetails)
            .then((venues) => {
                console.log(venues);
                this.setState({ venues });
            })
            .catch((err) => {
                console.log(err);
            });

    }

    render() {
        console.log(this.state.venues);
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
                    <div id="map-container">
                        <Map
                            center={this.state.defaultPosition}
                            markers={this.state.venues} />
                    </div>
                </main>

                <footer tabIndex="0" className="footer">
                    Stockholm city map provided by Google Maps API
                </footer>
            </div>
        );
    }
}

export default App;
