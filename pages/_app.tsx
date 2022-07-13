import type { AppProps } from 'next/app'
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import { ThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';


export default function MyApp({ Component, pageProps }: AppProps) {
  const theme = createTheme();
  
  return (
    <React.Fragment>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
    </React.Fragment>
  )
}