import { Paper } from '@material-ui/core'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from './Card';
import Add from './Add';

const useStyles = makeStyles({
    root: {
        width: '18rem',
        backgroundColor: '#ebecf0',
        marginLeft: '15px',

    },
    title: {
        padding: '0 15px',
        lineHeight: '28px',
        margin: '8px 0 8px',
        textAlign: 'left'
    },
});


const List = ({ list }) => {
    const classes = useStyles();
    return (
        <div>
            <Paper className={classes.root}>
                <h4 className={classes.title}>{list.title}</h4>
                {
                    list.cards.map((card) => (
                        <Card key={card.id} card={card} />
                    ))
                }
                <Add listId={list.id} />
            </Paper>
        </div>
    )
}

export default List
