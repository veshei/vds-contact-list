import type { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';
import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { ContactListProvider } from '../components/contact-list-provider';
import { ContactList } from '../public/mock-data';

export default function MyApp({ Component, pageProps }: AppProps) {
  const theme = createTheme();
  const [contactList, setContactList] = useState(ContactList);

  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <ContactListProvider
          value={{
            contactList: contactList,
            setContactList: setContactList,
          }}
        >
          <Component {...pageProps} />
        </ContactListProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}
