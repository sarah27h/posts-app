import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    color: 'white',
  },
  menuButton: {
    marginRight: theme.spacing(0.2),
  },
  linkColor: {
    color: 'white',
  },

  right: {
    marginLeft: 'auto',
    marginRight: '20px',
  },
}));
