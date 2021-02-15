import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { useStyles } from './NavbarStyle';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import AddBoxIcon from '@material-ui/icons/AddBox';

export default function Navbar() {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          {/* logo */}
          <Link className={`${classes.logo}`} component={RouterLink} underline="none" to="/">
            <Typography variant="h5">Dev Posts</Typography>
          </Link>
          {/* logo */}

          {/* links */}
          <Link
            className={`${classes.right} ${classes.linkColor}`}
            component={RouterLink}
            underline="none"
            to="/"
          >
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <HomeIcon />
            </IconButton>
            Home
          </Link>

          <Link
            className={`${classes.linkColor}`}
            component={RouterLink}
            underline="none"
            to="/create"
          >
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <AddBoxIcon />
            </IconButton>
            New post
          </Link>
          {/* links */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
