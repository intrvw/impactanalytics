import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { Button, ButtonGroup, TextField } from '@material-ui/core';
import { Clear, Home } from '@material-ui/icons';
import DisplayCandidateList from './DisplayCandidateList';
import { useSelector } from 'react-redux';
import { SearchSelector } from '../Redux/Selectors';
import { searchResult, updateSearchText, udpateFilterBy} from '../Redux/SearchSlice'
import { connect } from "react-redux";
import { LoadCandidateList } from "../Server/SearchAnime";
import cuid from 'cuid';
import ErrorAlert from '../commonUtils/errorSnackBarBottom';
import { useHistory } from 'react-router-dom';

const mapDispatch={ searchResult, updateSearchText, udpateFilterBy }

function HomeCandidatePage({searchResult,updateSearchText}) {
  const classes = useStyles();
  const history=useHistory()

  const { searchText, searchResults } = useSelector(SearchSelector);
  const [message,setMessage]=useState(null)
  const [text, setText] = useState(searchText)
  
  // LoadCandidateList(searchResult)
  
  useEffect(()=>{
      LoadCandidateList(searchResult)
      // console.log(searchResults);
  })

  const handleHome=()=>{
    history.push('/')
  }


  const handleChange = (event) => {
    setText(event.target.value);
  }

  const handleClear = () => {
    setText("");
  }

  const handleSearch =() => {
    if (text === null || text === "" || text.length < 4) {
      setMessage({msg:"Enter atleast 3 characters for search", key:cuid()})
    }
    else {
      updateSearchText(text)
      //search text, initial page, reducers, errormessage
      LoadCandidateList(searchResult)
    }
  };


  return (
    <>
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Anime
          </Typography>
          <Button 
            onClick={()=>handleHome()}
            startIcon={<Home/>}
            >
            Home
            </Button>
          <div className={classes.search}>
          <TextField
            variant="outlined"
            value={text}
            size="small"
            placeholder="Search Candidate"
            onChange={(event) => handleChange(event)}
            fullWidth 
           />
          </div>
          <div className={classes.search} >
          <ButtonGroup
            variant="contained"
            color="secondary"
            size="small"
            aria-label="contained primary button group"
            >
            <Button 
            onClick={()=>handleSearch()}
            startIcon={<SearchIcon/>}
            >
            Search
            </Button>
            <Button 
            onClick={()=>handleClear()}
            endIcon={<Clear/>}
            >Clear</Button>
          </ButtonGroup>
          </div>
        </Toolbar>
      </AppBar>
      <DisplayCandidateList/>
    </div>
    { message && <ErrorAlert message={message.msg} key={message.key} />}
    </>
  );
}
export default connect(null, mapDispatch)(HomeCandidatePage)
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
    inputColor:{
      color:"red"
    },
   
  },
 
}));

