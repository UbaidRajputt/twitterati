import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';

import { UsersTable } from './components/UsersTable/UsersTable';
import { UsersToolbar } from './components/UsersToolbar/UsersToolbar';
import { instance } from './../../helpers/index';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(4)
  }
}));

export const UserList = () => {

  const classes = useStyles();

  const [searchData, setSearchData] = useState(null);
  const [ disabled, setDisabled ] = useState(true);
 
  useEffect(() => {
    instance.get('searchPakistan')
    .then(response => {
      setSearchData(response.data.statuses);
    });
  }, [])

  const handleChange = (e) => {
    if(!e.target.value) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }

  const handleClick = () => {
    let search = document.getElementById('search').value;
    instance.get(`search${search}`)
    .then(response => {
      setSearchData(response.data.statuses);
    });
  }

  return (
    <div className={classes.root}>
      <UsersToolbar disableCheck={disabled} handleChange={handleChange} handleClick={handleClick} />
      <div className={classes.content}>
        {searchData ?
          <UsersTable statuses={searchData} />
          : <div className="nodata">No data found</div>
        }
      </div>
    </div>
  );
};
