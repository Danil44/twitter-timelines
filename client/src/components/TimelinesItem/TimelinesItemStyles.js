import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: '100%',
  },

  name: {
    marginRight: 5,
  },

  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 0 10px 10px',
  },

  likeIcon: {
    margin: theme.spacing(1),
    color: 'transparent',
  },

  icon: {
    margin: theme.spacing(1),
    color: 'grey',
  },

  count: {
    marginRight: 15,
  },
}));

export default useStyles;
