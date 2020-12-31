import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function SuccessAlert({message, verticalPosition, horizontalPosition}){

  const [show, setShow] = React.useState({
    open :true,
    vertical: verticalPosition,
    horizontal: horizontalPosition
  });

  const { vertical, horizontal, open}=show
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setShow({...show, open:false});
  };
  
    return (
      <>
      {/* <LinearProgress open={open} autoHideDuration={3000} /> */}
    <Snackbar anchorOrigin={{vertical, horizontal}} open={open} autoHideDuration={4000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success">
       {message}
      </Alert>
    </Snackbar>
    </>
    )
}