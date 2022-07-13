import { Box, Button, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';
import _ from 'underscore';
import { v4 as uuidv4 } from 'uuid';

import { useContactListContext } from '../../../components/contact-list-provider';

export default function NewContactForm(): JSX.Element {
  const { contactList, updateContactList } = useContactListContext();
  const router = useRouter();
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const updateFirstName = (event) => {
    _.debounce(setFirstName(event.target.value), 300);
  };
  const updateLastName = (event) => {
    _.debounce(setLastName(event.target.value), 300);
  };
  const updatePhoneNumber = (event) => {
    _.debounce(setPhoneNumber(event.target.value), 300);
  };
  const updateEmailAddress = (event) => {
    _.debounce(setEmail(event.target.value), 300);
  };

  const saveContactInfo = () => {
    if (
      firstName !== '' &&
      lastName !== '' &&
      phoneNumber !== '' &&
      email !== ''
    ) {
      const contact = {
        id: uuidv4(),
        firstName,
        lastName,
        phoneNumber: parseInt(phoneNumber),
        email,
      };
      const contacts = contactList;
      contacts.push(contact);
      updateContactList(contacts);
      router.push('/');
    }
  };
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <Box display="flex">
        <TextField
          required
          id="outlined-required"
          label="First Name"
          value={firstName}
          onChange={(event) => updateFirstName(event)}
        />
        <TextField
          required
          id="outlined-required"
          label="Last Name"
          value={lastName}
          onChange={(event) => updateLastName(event)}
        />
      </Box>
      <Box display="flex">
        <TextField
          required
          id="outlined-required"
          label="Phone Number"
          value={phoneNumber}
          onChange={(event) => updatePhoneNumber(event)}
        />
        <TextField
          required
          id="outlined-required"
          label="Email Address"
          value={email}
          onChange={(event) => updateEmailAddress(event)}
        />
      </Box>
      <Button
        sx={{ mt: 2.5, mr: 1 }}
        variant="contained"
        color="primary"
        onClick={() => saveContactInfo()}
      >
        Create
      </Button>
      <Button
        sx={{ mt: 2.5 }}
        variant="outlined"
        color="secondary"
        onClick={() => router.push('/')}
      >
        Cancel
      </Button>
    </Box>
  );
}
