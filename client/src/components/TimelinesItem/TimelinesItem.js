import React from 'react';
import {
  Card,
  CardHeader,
  Avatar,
  Typography,
  CardContent,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PropTypes from 'prop-types';
import ShareIcon from '@material-ui/icons/Share';
import useStyles from './TimelinesItemStyles';
import TimelinesQuotedTweet from '../TimelinesQuotedTweet/TimelinesQuotedTweet';

const TimelinesItem = ({
  text,
  name,
  createdAt,
  screenName,
  profileImage,
  retweets,
  likes,
  quotedTweet,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={<Avatar aria-label={name} src={profileImage} />}
        title={name}
        titleTypographyProps={{
          variant: 'h6',
          display: 'inline',
          className: classes.name,
        }}
        subheaderTypographyProps={{ display: 'inline' }}
        subheader={`@${screenName} . ${createdAt}`}
      />
      <CardContent>
        <Typography variant="body1">{text}</Typography>

        {quotedTweet && <TimelinesQuotedTweet {...quotedTweet} />}
      </CardContent>
      <div className={classes.iconContainer}>
        <FavoriteIcon
          stroke="grey"
          strokeWidth={2}
          className={classes.likeIcon}
        />
        <Typography variant="body2" className={classes.count}>
          {likes}
        </Typography>
        <ShareIcon className={classes.icon} />
        <Typography variant="body2" className={classes.count}>
          {retweets}
        </Typography>
      </div>
    </Card>
  );
};

TimelinesItem.defaultProps = {
  quotedTweet: null,
};

TimelinesItem.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  screenName: PropTypes.string.isRequired,
  profileImage: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  retweets: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
  quotedTweet: PropTypes.shape({}),
};

export default TimelinesItem;
