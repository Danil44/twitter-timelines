import React, { Component } from 'react';
import { Grid, Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { withRouter } from 'react-router-dom';
import TimelinesItem from '../TimelinesItem/TimelinesItem';

const getQueryParams = history => queryString.parse(history.location.search);
export class TimelinesList extends Component {
  state = {};

  componentDidMount() {
    const { history, getTimelines } = this.props;

    const query = getQueryParams(history);
    const isQueryExists = Object.entries(query).length !== 0;

    if (isQueryExists) {
      getTimelines(query.query);
    }
  }

  render() {
    const { items } = this.props;
    return (
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
  }
}

TimelinesList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  getTimelines: PropTypes.func.isRequired,
  history: PropTypes.shape({}).isRequired,
};

export default withRouter(TimelinesList);
