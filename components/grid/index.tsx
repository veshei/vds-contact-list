import { Grid, GridProps, styled } from '@mui/material';

interface MasterGridProps extends GridProps {
  children: JSX.Element[];
}
export default function MasterGrid(props: MasterGridProps): JSX.Element {
  const { children } = props;
  const StyledGrid = styled(Grid)<GridProps>(({ theme }) => ({
    maxWidth: 1440,
    margin: '0 auto',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      padding: '1rem 2rem',
    },
    [theme.breakpoints.up('sm')]: {
      padding: '2rem 4rem',
    },
    [theme.breakpoints.up('md')]: {
      padding: '2.5rem 5rem',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '5rem 5.25rem',
    },
  }));

  return (
    <StyledGrid {...props} container>
      {children}
    </StyledGrid>
  );
}
