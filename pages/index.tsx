import { Typography, Box, Button, useTheme } from '@mui/material';
import MasterGrid from '../components/grid';
import NavBar from '../components/nav-bar';
import Wrapper from '../components/wrapper';
import Head from 'next/head';
import AddIcon from '@mui/icons-material/Add';

import HomeContactGrid from '../sections/home/contact-grid';
import { useRouter } from 'next/router';

export default function Home(): JSX.Element {
  const router = useRouter();
  const theme = useTheme();
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
        <Box
          display="flex"
          sx={{
            [theme.breakpoints.down('md')]: {
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            },
            [theme.breakpoints.up('md')]: {
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            },
          }}
        >
          <Typography variant="h1">Contact List</Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            endIcon={<AddIcon />}
            onClick={() => router.push('/new-contact')}
            sx={{
              [theme.breakpoints.down('md')]: {
                marginTop: '0.5rem',
              },
            }}
          >
            Create Contact
          </Button>
        </Box>
        <HomeContactGrid />
      </MasterGrid>
    </Wrapper>
  );
}
