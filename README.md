ESL Cards Grid 
========

### Description 

A simple grid displaying cards from the Elder Scrolls Legends game. 

API Data is from: [ESL API](https://docs.elderscrollslegends.io/).

Technology Used: CSS, React, Webpack (building / gluing things together).

### How To Build/Run
- use `npm i` to install packages
- `npm run build` to build the app
- `npm run start` to see the app. It Should open a new browser tab for you.  

### Requirements 
- [x] Show results in a card grid format with the image prominently displayed.
- [x] Each card displays: Image, Name, Text, Set Name, and Type. Additional fields are optional.
- [x] Display a loading =indicator when communicating with the API.
- [x] Use a responsive design that accommodates, at minimum, desktop and mobile.
- [x] Initially, fetch and display the first 20 results returned by the API.
- [x] As the user scrolls down the page, load and append additional cards using “infinite scroll.”
- [x] Retrieve additional pages of results as-needed but do not load more than 20 cards with each request.
- [x] Allow the user to search for cards by Name.


### Notes
 In full production i'd do a few things differently if I had enough time.
  - Make a *debounced* typeahead for the search so you don't have to click the search button
  - Clean up the input that comes from search just to avoid various bugs. (You can use the advanced features of search like | or ,)
  - In general just make the Cards look better. 
  - I'd also make a few custom hooks (useDebounce, useFetchData) to make things a bit cleaner in the grid
  - Could also use `useReducer` to clean up some of the state calls in the Grid Component.


