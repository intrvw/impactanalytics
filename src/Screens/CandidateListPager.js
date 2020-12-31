import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Paper,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { connect, useSelector } from "react-redux";
import { SearchSelector } from "../Redux/Selectors";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import {
  searchResult,
  updateSearchText,
  updateSelectedCandidate,
} from "../Redux/SearchSlice";
import { LoadCandidateList } from "../Server/SearchAnime";
import FullScreenDialog from "../commonUtils/FullScreenDialog";
import SelectedAnime from "./SelectedCandidate";
import CircularBackDropProgress from "../commonUtils/CIrcularBackDropProgress";

const mapDispatch = {
  searchResult,
  updateSearchText,
  updateSelectedCandidate,
};

function CandidateListPager({
  searchResult,
  updatePageNumber,
  updateSelectedCandidate,
}) {
  const { searchResults, pageNumber, searchText } = useSelector(SearchSelector);
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [loading,setLoading]=useState(false)
  const handlePrevious = () => {
  };

  const handleNext = () => {
    LoadCandidateList(searchText, pageNumber + 1, searchResult, updatePageNumber)
  };

  const handleOpen = (anime) => {
    updateSelectedCandidate(anime)
    setOpen(true)
    setSelectedData(anime)
  };

  if(loading)
  return <CircularBackDropProgress/>

  return (
    <Paper className={classes.root}>
      <Box>
        <Button
          variant="contained"
          color="secondary"
          className={classes.previous}
          startIcon={<ArrowBackIcon />}
          disabled={pageNumber === 1}
          onClick={handlePrevious}
        >
          Previous
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.next}
          endIcon={<ArrowForwardIcon />}
          onClick={handleNext}
        >
          Next
        </Button>
      </Box>
      <Box className={classes.box} elevation={3}>
        { ( searchResults !== null && searchResults !== undefined && searchResults.length !== 0 )
          ? searchResults.map((candidate) => (
              <Card className={classes.card} key={candidate.id}>
                <CardActionArea
                  onClick={() => {
                    handleOpen(candidate);
                  }}
                >
                  <CardMedia
                    className={classes.media}
                    image={candidate.Image}
                  />
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {candidate.name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </CardActionArea>
              </Card>
            ))
          : null}
      </Box>
      <Box>
        <Button
          variant="contained"
          color="secondary"
          className={classes.previous}
          startIcon={<ArrowBackIcon />}
          disabled={pageNumber === 1}
          onClick={handlePrevious}
        >
          Previous
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.next}
          endIcon={<ArrowForwardIcon />}
          onClick={handleNext}
        >
          Next
        </Button>
      </Box>
      {open && (
        <FullScreenDialog
          title={selectedData.title}
          open={open}
          setOpen={setOpen}
          view={<SelectedAnime />}
        />
      )}
    </Paper>
  );
}
export default connect(null, mapDispatch)(CandidateListPager);
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    marginTop:theme.spacing(7)
  },
  box: {
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
  card: {
    maxWidth: 210,
    minWidth: 210,
    maxHeight: 400,
  },
  media: {
    height: 300,
  },
  previous: {
    float: "left",
    margin: "1%",
  },
  next: {
    margin: "1%",
    float: "right",
  },
}));
