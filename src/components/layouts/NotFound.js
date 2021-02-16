import { Link } from 'react-router-dom';
import ErrorIcon from '@material-ui/icons/Error';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

export default function NotFound() {
  return (
    <Box mt={5}>
      <Grid container justify="center" direction="column" alignItems="center" spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h3" color="secondary">
            <IconButton edge="start" color="secondary" aria-label="menu">
              <ErrorIcon style={{ fontSize: 60 }} />
            </IconButton>
            404 - Not Found!
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Link to="/"> Go Home</Link>
        </Grid>
      </Grid>
    </Box>
  );
}
