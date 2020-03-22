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

      console.log(response.data)
      setSearchData(response.data.statuses);
    });
  }, [])

  const handleChange = (e) => {
    let error = e.target.parentElement.parentElement.parentElement.querySelector('.error');
    if(!e.target.value) {
      setDisabled(true)
      //error.innerHTML = 'please type search text first';
    } else {
     // error.innerHTML = '';
      setDisabled(false)
    }
  }

  const handleClick = () => {
    let search = document.getElementById('search').value;
    console.log(search);
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
