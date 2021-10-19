import { makeStyles } from '@material-ui/core';

export const bannerStyles = (bgLink) => makeStyles((theme) => ({
  bg: {
    background: bgLink,
    backgroundSize: 'cover',
    width: '100%',
    height: '600px',
    paddingTop: theme.spacing(6),
  },
  content: {
    height: '100%',
    paddingLeft: '30px',
    color: 'white',
  },
  btnContainer: {
    marginTop: '20px',
  },
  btn: {
    marginRight: '10px',
    background: 'white',
  },
}));

export const movieRowStyles = makeStyles((theme) => ({
  itemRoot: {
    padding: '0 !important',
  },
  container: {
    flexWrap: 'nowrap',
    'overflow-x': 'scroll',
    padding: theme.spacing(2, 0),
  },
  heading: {
    padding: '15px 0',
  },
}));
