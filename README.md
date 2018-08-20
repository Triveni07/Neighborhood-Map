# Neighborhood Map (React)

This is a single page application featuring a map of your neighborhood or a neighborhood you would like to visit. Functionality has been added to this map including highlighted locations, third-party data about those locations and various ways to browse the content.

## Table of Contents :
* ### Installation
* ### Functionality
* ### Usage
* ### Credits
* ### License

### 3. _Installation_
The application was created with create-react-app and requires only npm install and npm start to get it installed and launched.

    In your terminal or command line, navigate to the directory containing this project
    npm install
    npm start

### 1. _Application Functionality_
* Location Filter:
   > a) Includes a text input field or dropdown menu that filters the map markers and list items to locations matching the text input or selection. Filter function runs error-free.

 * List View:
    > a) A list-view of location names is provided which displays all locations by default, and displays the filtered subset of locations when a filter is applied.
    > b) Clicking a location on the list displays unique information about the location, and animates its associated map marker (e.g. bouncing, color change.)
    > c) List functionality is responsive and runs error free.

* Map and Markers:
    > a) Map displays all location markers by default, and displays the filtered subset of location markers when a filter is applied.

    > b) Clicking a marker displays unique information about a location somewhere on the page (modal, separate div, inside an infoWindow).
    > c) Any additional custom functionality provided in the app functions error-free.

* Location Details:
    > a) Additional Location Data:
    > 1) Functionality providing additional data about a location is provided and sourced from a          3rd party API. Information can be provided either in the marker’s infoWindow, or in an            HTML element in the DOM (a sidebar, the list view, a modal, etc.)

### 4. _Usage_
1) User can click markers and open up more information about that location
2) User can click list and displays information about the associated marker
3) List of locations are filterable with text input menu and filtering the list also filters the markers on the map.
4) Toggle list visibility has been added to hide it on smaller devices

### 5. _Credits_
__The Google Maps API and Foursquare API services has been used to render map and display venues details__

### 6. _License_
MIT License
Copyright (c) [2018] [Triveni Vikrant Londhe]
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
