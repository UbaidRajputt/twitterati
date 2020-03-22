import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Paper, Input, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: '4px',
    alignItems: 'center',
    padding: theme.spacing(1),
    display: 'flex',
    flexBasis: 820
  },
  icon: {
    marginRight: theme.spacing(1),
    color: theme.palette.text.secondary
  },
  input: {
    flexGrow: 1,
    fontSize: '14px',
    lineHeight: '16px',
    letterSpacing: '-0.05px'
  }
}));

export const SearchInput = props => {
  const { className, handleChange, disableCheck, handleClick, style, ...rest } = props;

  const classes = useStyles();

  return (
    <Paper
      {...rest}
      className={clsx(classes.root, className)}
      style={style}
    >
      <SearchIcon className={classes.icon} />
      <Input
        {...rest}
        className={classes.input}
        name='search'
        id='search'
        //disableUnderline
        error={disableCheck}
        onChange={handleChange}
      />
      <Button 
        {...rest}
        type='button'
        id='searchButton'
        color='primary'
        onClick={handleClick}
        disabled={disableCheck}
      >Search</Button>
    </Paper>
  );
};

export default SearchInput;
