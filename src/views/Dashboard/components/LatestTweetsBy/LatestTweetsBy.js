import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText
} from '@material-ui/core';

import { getInitials } from '../../../../helpers';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  },
  content: {
    padding: 0
  },
  image: {
    height: 48,
    width: 48
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const LatestTweetsBy = props => {
  const { className, statuses, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        subtitle={statuses && `${statuses.length} in total`}
        title="Latest Tweets by"
      />
      <Divider />
      <CardContent className={classes.content}>
        {statuses && 
        <List>
          {statuses.slice(0, 10).map((status, i) => (
            <ListItem
              divider={i < statuses.length - 1}
              key={status.id}
            >
              <ListItemAvatar>
                <Avatar
                  className={classes.avatar}
                  src={status.user.profile_image_url}
                >
                  {getInitials(status.user.name)}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={status.user.name}
                secondary={`Location ${status.user.location}`}
              />
            </ListItem>
          ))}
        </List>
        }
      </CardContent>
    </Card>
  );
};

LatestTweetsBy.propTypes = {
  className: PropTypes.string
};

export default LatestTweetsBy;
