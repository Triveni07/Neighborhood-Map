import React, { Component } from 'react';
import Map from './Map';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 tabIndex="0" className="App-title">Neighborhood Map</h1>
                </header>
                <p className="App-intro">
                    Visit nearby places in Stockholm, Sweden.
                  </p>
                <main role="main">
                    <div id="map">
                        <Map />
                    </div>
                </main>
                <footer tabIndex="0">
                </footer>
            </div>


        );
    }
}

export default App;
