import { Typography } from '@mui/material';
import Head from 'next/head';

import Wrapper from '../components/wrapper';
import MasterGrid from '../components/grid';
import { useRouter } from 'next/router';
import NavBar from '../components/nav-bar';
import NewContactForm from '../sections/new-contact/new-contact-form';

export default function EditContactPage(): JSX.Element {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Wrapper>
      <Head>
        <title>Contact List | Create New Contact</title>
      </Head>
      <NavBar />
      <MasterGrid
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h1">Create New Contact</Typography>
        <NewContactForm />
      </MasterGrid>
    </Wrapper>
  );
}
