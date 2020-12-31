import React from 'react';
import { Backdrop, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme)=>({
  backdrop:{
    display:"flex",
    flexDirection:"column",
    '& > *':{
      margin:"1%"
    }
  },
  image:{
    height:"20%",
    width:"10%",
    borderRadius:"40%"
  }
}))
export default function CircularBackDropProgress(){
  const classes=useStyles()
    return(
        <Backdrop className={classes.backdrop} open={true}>
            <CircularProgress color="primary" />
        </Backdrop>
    )
}