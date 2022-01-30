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
        marginTop: '5px',
    },
    avatar: {
        width: '2rem',
        height: '2rem'
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
                    <button className="btn login"><PublicIcon className={classes.icon} /> Public</button>
                    <div className="line"></div>
                    <Avatar className={classes.avatar}>AH</Avatar>
                </div>
                <div className="content-right">
                    <div className="line"></div>
                    <button className="btn login"><FilterListIcon className={classes.icon} /> Filter</button>
                    <button className="btn login"><MoreHorizIcon className={classes.icon} /> Show Menu</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
