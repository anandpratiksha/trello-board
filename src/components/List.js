import { Paper } from '@material-ui/core'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from './Card';
import Add from './Add';
import { Droppable } from 'react-beautiful-dnd';

const useStyles = makeStyles({
    root: {
        width: '18rem',
        backgroundColor: '#ebecf0',
        marginLeft: '15px',
    },
    title: {
        padding: '0 15px',
        paddingTop: '5px',
        lineHeight: '28px',
        margin: '8px 0 8px',
        textAlign: 'left',
        fontSize: '17px',
        fontWeight: 'bold',
    },
    cardContainer: {
    }
});

const List = ({ list }) => {
    const classes = useStyles();
    return (
        <div>
            <Paper className={classes.root}>
                <h4 className={classes.title}>{list.title}</h4>
                <Droppable droppableId={list.id}>
                    {(provided) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {list.cards.map((card, index) => (
                                <Card key={card.id} card={card} index={index} />
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
                <Add listId={list.id} />
            </Paper>
        </div>
    )
}

export default List
