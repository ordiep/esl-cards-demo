import React from 'react';
import ReactDOM from 'react-dom';
import Grid from './esl-grid';
import '../../styles/styles.css';

const App = () => {
  return (
  <React.Fragment>
    <h2> ESL Card Demo Grid Loads here </h2>
    <Grid />
  </React.Fragment>
  )
};

export default App;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;