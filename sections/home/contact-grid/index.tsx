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
    justifyContent: 'center',
  }));
  const Row = styled(Box)<BoxProps>(({ theme }) => ({
    padding: '1rem',
    display: 'flex',
  }));
  return (
    <Column>
      {contactList &&
        contactList.map((contact, index) => (
          <Row>
            <ContactCard
              key={index}
              id={contact.id}
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
