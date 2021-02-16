import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  list: {
    paddingLeft: 0,
  },

  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    marginTop: '20px',
    maxWidth: 500,
  },
}));
