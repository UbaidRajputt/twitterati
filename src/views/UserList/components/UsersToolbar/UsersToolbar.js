import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';

import { SearchInput } from '../../../../components/SearchInput/SearchInput';

const results= [
  {
    "rat": "4G",
    "y_axis_ABANS": 92700,
    "y_axis_HONOR": 346635,
    "y_axis_HUAWEI": 1902927,
    "y_axis_MI": 133664,
    "y_axis_NOKIA": 325375,
    "y_axis_OPPO": 1297976,
    "y_axis_QMobile": 207020,
    "y_axis_Samsung": 1285346,
    "y_axis_sunnycat": 127000,
    "y_axis_vivo": 357550
  },
  {
    "rat": "2G",
    "y_axis_Club Mobile": 60000,
    "y_axis_HIQO": 6000,
    "y_axis_MAXX": 46200,
    "y_axis_NOKIA": 2460463,
    "y_axis_QMobile": 954653,
    "y_axis_Teltonika": 22931,
    "y_axis_VGO TEL": 1127718,
    "y_axis_VIKINHYRE": 6000,
    "y_axis_Voice": 162560,
    "y_axis_Xcell": 103000
  },
  {
    "rat": "3G",
    "y_axis_Aratek": 37258,
    "y_axis_HUAWEI": 114405,
    "y_axis_Infinix": 45441,
    "y_axis_M2M": 9270,
    "y_axis_NOKIA": 19388,
    "y_axis_QMobile": 1367189,
    "y_axis_QTab": 42264,
    "y_axis_VGO TEL": 16200,
    "y_axis_itel": 10560,
    "y_axis_telpo": 5180
  },
  {
    "rat": "Others",
    "y_axis_Thuraya": 150
  }
]

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
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.row}>
        <SearchInput
          className={classes.searchInput}
          placeholder="Search user" 
        />
      </div>
    </div>
  );
};