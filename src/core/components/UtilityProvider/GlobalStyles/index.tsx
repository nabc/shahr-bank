import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(() => createStyles({}));

const GlobalStyles = () => {
  useStyles();

  return null;
};

export default GlobalStyles;
