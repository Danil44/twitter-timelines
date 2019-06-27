import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TimelinesSearch from './components/TimelinesSearch/TimelinesSearchContainer';
import TimelinesList from './components/TimelinesList/TimelinesListContainer';

const App = () => (
  <Fragment>
    <CssBaseline />
    <TimelinesSearch />
    <TimelinesList />
  </Fragment>
);

export default App;
