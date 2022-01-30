import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    card: {
        padding: theme.spacing(1),
        margin: theme.spacing(1),
    },
    progress: {
        // float: 'left',
        width: '50px',
        height: '5px',
        backgroundColor: '#0079bf',
        borderRadius: '4px'
    },
    todo: {
        marginRight: '7rem',
        marginTop: '5px',
        fontSize: '14px',
    }
}));

const Card = () => {
    const classes = useStyles();
    return (
        <div>
            <Paper className={classes.card}>
                <div className={classes.progress}></div>
                <Typography className={classes.todo}>HelpDesk call AA9999</Typography>
            </Paper>
        </div>
    )
}

export default Card
