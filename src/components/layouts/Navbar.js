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
import Grid from '@material-ui/core/Grid';

export default function Navbar() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container alignItems="center">
          {/* logo */}
          <Grid item xs={6}>
            <Link className={`${classes.logo}`} component={RouterLink} underline="none" to="/">
              <Typography variant="h5">Dev Posts</Typography>
            </Link>
          </Grid>
          {/* logo */}

          {/* links */}
          <Grid item container xs={6} justify="flex-end" spacing={2}>
            <Grid item md={3}>
              <Link
                className={`${classes.alignRight} ${classes.linkColor}`}
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
            </Grid>

            <Grid item md={3}>
              <Link
                className={`${classes.alignRight} ${classes.linkColor}`}
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
            </Grid>
            {/* links */}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
