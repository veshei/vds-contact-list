import { Typography } from '@mui/material';
import MasterGrid from '../components/grid';
import NavBar from '../components/nav-bar';
import Wrapper from '../components/wrapper';
import Head from 'next/head';

import HomeContactGrid from '../sections/home/contact-grid';

export default function Home(): JSX.Element {
  return (
    <Wrapper>
      <Head>
        <title>Contact List | Home</title>
      </Head>
      <NavBar />
      <MasterGrid
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h1">Contact List</Typography>
        <HomeContactGrid />
      </MasterGrid>
    </Wrapper>
  );
}
