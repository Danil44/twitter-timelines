import React from 'react';
import {
  Card,
  CardHeader,
  Avatar,
  Typography,
  CardContent,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import moment from 'moment';
import useStyles from './TimelinesQuotedTweetStyle';

const TimelinesQuotedTweet = ({ user, created_at: createdAt, text }) => {
  const classes = useStyles();
  const formatedTime = moment(createdAt).format('LL');
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={<Avatar aria-label={user.name} src={user.profile_image_url} />}
        title={user.name}
        titleTypographyProps={{
          display: 'inline',
          className: classes.name,
        }}
        subheaderTypographyProps={{ display: 'inline' }}
        subheader={`@${user.screen_name} . ${formatedTime}`}
      />
      <CardContent>
        <Typography variant="body1">{text}</Typography>
      </CardContent>
    </Card>
  );
};

TimelinesQuotedTweet.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    screen_name: PropTypes.string.isRequired,
    profile_image_url: PropTypes.string.isRequired,
  }).isRequired,
  created_at: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default TimelinesQuotedTweet;
