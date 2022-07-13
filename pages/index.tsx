import { Typography } from '@mui/material';
import StyledGrid from '../components/grid';
import NavBar from '../components/nav-bar';
import Wrapper from '../components/wrapper';
import Head from 'next/head';

import HomeContactGrid from '../sections/home/contact-grid';

export default function Home(): JSX.Element {
  return (
    <Wrapper>
      <Head>
        <title>VDS Contact List</title>
      </Head>
      <NavBar />
      <StyledGrid
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h1">Contact List</Typography>
        <HomeContactGrid />
      </StyledGrid>
    </Wrapper>
  );
}
