import {  Box, Button, Card, CardMedia, Container, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux';
import { SearchSelector } from '../Redux/Selectors';


function SelectedCandidate(){
    const {selectedCandidate} = useSelector(SearchSelector)
    const classes=useStyles()

    return(
        <Container maxWidth="md" className={classes.root}>
            <Typography variant="h3" gutterBottom>Candidate Details</Typography>
            <Box className={classes.box}>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image={selectedCandidate.Image}
                    />
                </Card>
                <Box>
                    <Typography variant="h4" gutterBottom>Candidate:</Typography>
                    <Typography variant="body1" gutterBottom>{selectedCandidate.synopsis}</Typography>
                    <p><b>Id</b>: {selectedCandidate.id}</p>
                    <p><b>Name</b>: {selectedCandidate.name}</p>
                    <Button className={classes.button} variant="contained" color="secondary">Shortlist</Button>
                    <Button variant="contained" color="secondary">Reject</Button>
                </Box>
            </Box>
            <Box>
            </Box>
        </Container>
    )
}


export default SelectedCandidate;

const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flex: 1,
      flexDirection: "column",
      '& > * ':{
          padding:'1%',
          margin:'1%'
      }
    },
    box:{
        display:'flex',
        flex:1,
        flexDirection:'row',
        '& > * ':{
            padding:'1%',
            margin:'1%'
        }
    },
    card:{
        maxWidth: 210,
        minWidth: 210,
        maxHeight:300
    },
    media:{
        height: 300,
    },
    promo:{
        height:500,
        maxWidth:640
    },
  episodeBox: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    flexWrap: "wrap",
    margin: theme.spacing(1),
    height: "100%",
    overflowY: "scroll",
    "& > *": {
      margin: theme.spacing(2),
    },
  },
  episodeCard:{
    maxWidth: 210,
    minWidth: 210,
    maxHeight: 500,
  },
  button:{
    margin:theme.spacing(1)
  }
  }));
  

