import { Box, BoxProps, styled, Typography } from '@mui/material';

import ContactCard from '../../../components/contact-card';
import { useContactListContext } from '../../../components/contact-list-provider';
export default function HomeContactGrid(): JSX.Element {
  const contactContext = useContactListContext();
  const { contactList } = contactContext;
  const Column = styled(Box)<BoxProps>(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  }));
  const Row = styled(Box)<BoxProps>(({ theme }) => ({
    padding: '1rem',
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flex: '100%',
      justifyContent: 'center',
    },
    [theme.breakpoints.up('sm')]: {
      flex: '100%',
      justifyContent: 'center',
    },
    [theme.breakpoints.up('md')]: {
      flex: '50%',
      justifyContent: 'flex-start',
    },
    [theme.breakpoints.up('lg')]: {
      flex: '33%',
      justifyContent: 'flex-start',
    },
  }));
  return (
    <Column>
      {contactList.map((contact, index) => (
        <Row>
          <ContactCard
            key={index}
            firstName={contact.firstName}
            lastName={contact.lastName}
            phoneNumber={contact.phoneNumber}
            emailAddress={contact.email}
          />
        </Row>
      ))}
    </Column>
  );
}
