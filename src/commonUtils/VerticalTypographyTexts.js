import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import cuid from 'cuid';


export default function VerticalTypographyTexts({data}){
    const classes=useStyles();
    const keys=Object.keys(data);
    return(
        <div className={classes.root}>
            {keys.map((title)=>(
                <div className={classes.item} key={cuid()}>
                    <Typography className={classes.title} variant="body2">
                    {title}:
                    </Typography>
                    <Typography className={classes.value} variant="h5" gutterBottom>
                    {data[title]}
                    </Typography>
                </div>
            ))} 
        </div>
    )
}

const useStyles=makeStyles((theme)=>({
    root:{
        display:'flex',
        flexDirection:"row",
        flexWrap:"wrap",
        // '& > *':{
        //     margin:theme.spacing(2)
        // },
        margin:theme.spacing(2)
    },
    item:{
        marginRight:theme.spacing(2),
        '& > *':{
            paddingRight:theme.spacing(5)
        }
    },
    title:{
        // padding:theme.spacing(1)
    },
    value:{
        // margin:theme.spacing(1)
    }
}))