import type { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';
import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { ContactListProvider } from '../components/contact-list-provider';
import { ContactList } from '../public/mock-data';
import theme from '../utils/theme';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [contactList, setContactList] = useState(ContactList);

  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <ContactListProvider>
          <Component {...pageProps} />
        </ContactListProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}
