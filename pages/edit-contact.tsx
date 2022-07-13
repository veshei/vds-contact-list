import { Typography } from '@mui/material';
import Head from 'next/head';

import Wrapper from '../components/wrapper';
import MasterGrid from '../components/grid';
import EditContactForm from '../sections/edit-contact/edit-contact-form';
import { useRouter } from 'next/router';

export default function EditContactPage(): JSX.Element {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Wrapper>
      <Head>
        <title>Contact List | Edit Contact</title>
      </Head>
      <MasterGrid
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h1">Edit Contact</Typography>
        <EditContactForm id={id as string} />
      </MasterGrid>
    </Wrapper>
  );
}
