import React from 'react';
import Grid from '@material-ui/core/Grid';
import PhotoGallery from './PhotoGallery';
import './App.css';

const App = () => (
  <div>
    <div style={{height: '1vh'}} />
    <Grid container>
      <Grid item xs={12}>
        <PhotoGallery />
      </Grid>
    </Grid>
    <div style={{height: '1vh'}} />
  </div>
);

export default App;
