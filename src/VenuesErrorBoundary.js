import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Catch errors occurred during the Foursquare API call to fetch venues and display a
 * message in the UI explaining the problem.
 */
class VenuesErrorBoundary extends Component {

    static propTypes = {
        children: PropTypes.node
    }

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
        if (this.state.error !== null) {
            //  Render any custom fallback UI
            return (
                <div className="venues-error">
                    <h2>Oops! Foursquare API service cannot be reached...</h2>
                    <details style={{ whiteSpace: "pre-wrap" }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo.componentStack}
                    </details>
                    <p> Try:</p>
                    <ul>
                        <li>Checking the network cables, modem, and router</li>
                        <li>Reconnecting to Wi-Fi</li>
                    </ul>
                </div>
            );
        }
        return this.props.children;
    }
}

export default VenuesErrorBoundary;
