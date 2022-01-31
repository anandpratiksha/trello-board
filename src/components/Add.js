import { InputBase, Paper, Button, IconButton, Typography, fade, Collapse } from '@material-ui/core'
import React, { useContext, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import storeApi from './storeApi';

const useStyles = makeStyles((theme) => ({
    container: {
        margin: theme.spacing(2),
    },
    list: {
        margin: theme.spacing(1, 1, 1, 1),
        paddingBottom: theme.spacing(4)
    },
    input: {
        margin: theme.spacing(1),
    },
    button: {
        margin: theme.spacing(0, 1, 1, 1)
    },
    btn: {
        background: 'linear-gradient(to bottom, #61BD4F 0%, #5AAC44 100%)',
    },
    add: {
        padding: theme.spacing(1, 1, 1, 2),
        margin: theme.spacing(0, 1, 1, 1),
        background: '#80808052',
        cursor: 'pointer',
        '&:hover': {
            background: fade('#8080801c', 0.5)
        }
    }
}));

const Add = ({ listId }) => {

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [cardContent, setCardContent] = useState("");
    const { addContent } = useContext(storeApi);

    const handleOnChange = (e) => {
        setCardContent(e.target.value);
    }

    const handleAddButton = () => {
        addContent(cardContent, listId);
        setCardContent("");
        setOpen(false);
    }
    return (
        <div className={classes.container}>
            <Collapse in={open}>
                <Paper className={classes.list}>
                    <InputBase
                        className={classes.input}
                        placeholder="Add To Do List..."
                        onChange={handleOnChange}
                        value={cardContent}
                    />
                </Paper>
                <div className={classes.button}>
                    <Button className={classes.btn} onClick={handleAddButton}>Add List</Button>
                    <IconButton onClick={() => setOpen(false)}>
                        <CloseIcon />
                    </IconButton>
                </div>
            </Collapse>
            <Collapse in={!open}>
                <Paper className={classes.add} elevation={3} onClick={() => setOpen(!open)}>
                    <Typography>+ Add to list</Typography>
                </Paper>
            </Collapse>
        </div>
    )
}

export default Add
