import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { UsersTable } from './components/UsersTable/UsersTable';
import { UsersToolbar } from './components/UsersToolbar/UsersToolbar';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

export const UserList = () => {
  const classes = useStyles();

  const [users] = useState(mockData);

  return (
    <div className={classes.root}>
      <UsersToolbar />
      <div className={classes.content}>
        <UsersTable users={users} />
      </div>
    </div>
  );
};
