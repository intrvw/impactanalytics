import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx'

const useStyles = makeStyles({
  root:{
    width:1000
  },
  list: {
    width: 1000,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TempRightSideDrawer({side,view}) {
  const classes = useStyles();
  const [state, setState] = React.useState(true);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(open);
  };

  return (
    <div  className={clsx(classes.list, {
      [classes.fullList]: side === 'top' || side === 'bottom',
    })}>
          <Drawer anchor={side} open={state} onClose={toggleDrawer(false)}>
              {view}
          </Drawer>
    </div>
  );
}
