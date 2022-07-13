import { createTheme } from '@mui/material';

const defaultTheme = createTheme();

const theme = createTheme({
  typography: {
    h1: {
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: '2rem',
      },
      [defaultTheme.breakpoints.up('sm')]: {
        fontSize: '3rem',
      },
    },
  },
});

export default theme;
