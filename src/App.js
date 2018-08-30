import React from 'react';
import Grid from '@material-ui/core/Grid';
import PhotoGallery from './PhotoGallery';
import logo from './logo.svg';
import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    <Grid container>
      <Grid item xs={12}>
        <PhotoGallery />
      </Grid>
    </Grid>
  </div>
);

export default App;
