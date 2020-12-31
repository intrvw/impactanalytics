import React from 'react'
import SuccessAlert from './successSnackBarCenterBottom'
import ErrorAlert from './errorSnackBarBottom'
import { Top, Right } from '../GlobalConstants'
import LinearProgressIndeterminate from './linearProgress'

export default function CustomAlert({loading,success,error}){
    return(
        <>
        {loading ? <LinearProgressIndeterminate/>:null}
        {success ? <SuccessAlert key={success.key} message={success.msg} verticalPosition={Top} horizontalPosition={Right}/> : null}
        {error  ?<ErrorAlert key={error.key} message={error.msg}/>:null}
        </>
    )
}