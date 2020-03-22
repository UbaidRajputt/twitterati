import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';

import { SearchInput } from '../../../../components/SearchInput/SearchInput';

const useStyles = makeStyles(theme => ({
  root: {},
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1)
  },
  spacer: {
    flexGrow: 1
  },
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  searchInput: {
    marginRight: theme.spacing(1)
  }
}));

export const UsersToolbar = props => {
  const { className, handleChange, disableCheck, handleClick, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.row}>
        <SearchInput
          className={classes.searchInput}
          placeholder="Type Country name here..." 
          handleChange={handleChange}
          handleClick={handleClick}
          disableCheck={disableCheck}
        />
      </div>
    </div>
  );
};