import { Box, Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import React from 'react'
import FilterBy from './FilterBy';

export default function Filters(){
    const classes=useStyles()

    return(
        <Box className={classes.root}>
            <Grid item>
                <FilterBy/>
            </Grid>
            {/* <Grid item>
                <OrderBy/>
            </Grid> */}
        </Box>
    )
}


const useStyles = makeStyles((theme) =>
 ({
    root:{
        display:'flex',
        flex:1,
        flexDirection:'column',
        // flexWrap:'wrap',
        marginTop:theme.spacing(7)
    },
  }));