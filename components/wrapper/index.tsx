import { Grid, GridProps, styled } from '@mui/material';

interface WrapperProps extends GridProps {
  children: JSX.Element | JSX.Element[];
}
export default function Wrapper(props: WrapperProps): JSX.Element {
  const { children } = props;
  const StyledWrapper = styled(Grid)<GridProps>(({ theme }) => ({
    width: '100%',
  }));

  return <StyledWrapper {...props}>{children}</StyledWrapper>;
}
