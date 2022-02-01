import React from 'react';
import './Navbar.css';
import PublicIcon from '@material-ui/icons/Public';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FilterListIcon from '@material-ui/icons/FilterList';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    icon: {
        width: '1.2rem',
        height: '1.2rem',
        margin: '5px',
        color: '#fff'
    },
    avatar: {
        width: '2rem',
        height: '2rem',
        margin: '5px',
    },
    abc: {
        display: 'flex',
        justifyContent: 'center',
        borderRadius: '3px',
        margin: '5px',
        padding: '3px',
        cursor: 'pointer',
        background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2))',
    },
    Public: {
        marginTop: '5px',
        padding: '1px',
        color: '#fff',
        fontSize: '14px',
        fontWeight: 'bold',
    }
}));

const Navbar = () => {
    const classes = useStyles();
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-leftside">
                    <h4 className="leftside">Home</h4>
                    <h4 className="leftside">Tour</h4>
                    <h4 className="leftside">Blog</h4>
                </div>
                <div className="navbar-center"></div>
                <div className="navbar-rightside">
                    <button className="btn signup">Sign up</button>
                    <button className="btn login">Log In</button>
                </div>
            </nav>
            <header>
                <h3>Visually collaborate with anyone, anywhere.<span><button className="signup-free">Sign Up for free</button></span></h3>
            </header>
            <div className="content">
                <div className="content-left">
                    <h3 className="name">Kanban Board</h3>
                    <div className="line"></div>
                    <div className={classes.abc}>
                        <PublicIcon className={classes.icon} />
                        <div className={classes.Public}>Public</div>
                    </div>
                    <div className="line"></div>
                    <Avatar className={classes.avatar}>AH</Avatar>
                </div>
                <div className="content-right">
                    <div className="line"></div>
                    <div className={classes.abc}>
                        <FilterListIcon className={classes.icon} />
                        <div className={classes.Public}>Filter</div>
                    </div>
                    <div className={classes.abc}>
                        <MoreHorizIcon className={classes.icon} />
                        <div className={classes.Public}>Show Menu</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
