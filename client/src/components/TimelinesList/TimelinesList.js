import React from 'react';
import { Grid, Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import TimelinesItem from '../TimelinesItem/TimelinesItem';

const TimelinesList = ({ items }) => (
  <Container maxWidth="sm">
    <Grid container spacing={4}>
      {items.map(item => (
        <Grid item xs={12} key={item.id}>
          <TimelinesItem {...item} />
        </Grid>
      ))}
    </Grid>
  </Container>
);

TimelinesList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
};

export default TimelinesList;
