import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Draggable } from 'react-beautiful-dnd';

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

const Card = ({ card, index }) => {
    const classes = useStyles();
    return (
        <Draggable draggableId={card.id} index={index} key={card.id}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                >
                    <Paper className={classes.card}>
                        <div className={classes.progress}></div>
                        <Typography className={classes.todo}>{card.content}</Typography>
                    </Paper>
                </div>
            )}
        </Draggable>
    )
}

export default Card
