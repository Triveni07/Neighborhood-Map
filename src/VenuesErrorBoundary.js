import React, { Component } from 'react';

/**
 * Catch errors occurred during the Foursquare API call to fetch venues and display a
 * message in the UI explaining the problem.
 */
class VenuesErrorBoundary extends Component {
    state = {
        error: null,
        errorInfo: null
    };

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
    }

    render() {
        if (this.state.error === error) {
            //  Render any custom fallback UI
            return (
                <div className="venues-error">
                    <h1>Oops! Foursquare API service cannot be reached...{errorInfo}</h1>
                    <p> Try:</p>
                    <ul>
                        <li>Checking the network cables, modem, and router</li>
                        <li>Reconnecting to Wi-Fi</li>
                    </ul>
                </div>
            );
        }
    }
}

export default VenuesErrorBoundary;
