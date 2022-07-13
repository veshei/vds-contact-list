import { Box, Button, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';
import _ from 'underscore';
import { v4 as uuidv4 } from 'uuid';

import { useContactListContext } from '../../../components/contact-list-provider';

export default function NewContactForm(): JSX.Element {
  const { contactList, updateContactList } = useContactListContext();
  const router = useRouter();
  const [firstName, setFirstName] = useState<string>();
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastName, setLastName] = useState<string>();
  const [lastNameError, setLastNameError] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState<string>();
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [phoneNumberHelperText, setPhoneNumberHelperText] = useState('');
  const [email, setEmail] = useState<string>();
  const [emailError, setEmailError] = useState(false);
  const [emailHelperText, setEmailHelperText] = useState('');

  const updateFirstName = (event) => {
    setFirstName(event.target.value);
    setFirstNameError(event.target.value === '');
  };
  const updateLastName = (event) => {
    setLastName(event.target.value);
    setLastNameError(event.target.value === '');
  };
  const updatePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
    if (event.target.value === '') {
      setPhoneNumberError(true);
      setPhoneNumberHelperText('Phone number cannot be empty');
    } else if (!/^\d+$/.test(event.target.value)) {
      setPhoneNumberError(true);
      setPhoneNumberHelperText('Invalid input, please enter a number');
    } else {
      setPhoneNumberError(false);
      setPhoneNumberHelperText('');
    }
  };
  const updateEmailAddress = (event) => {
    setEmail(event.target.value);
    const emailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (event.target.value === '') {
      setEmailError(true);
      setEmailHelperText('Email address cannot be empty');
    } else if (!emailRegex.test(event.target.value)) {
      setEmailError(true);
      setEmailHelperText('Invalid input, please enter a valid email');
    } else {
      setEmailError(false);
      setEmailHelperText('');
    }
  };

  const saveContactInfo = () => {
    if (!firstNameError && !lastNameError && !phoneNumberError && !emailError) {
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
          onChange={(event) => _.debounce(updateFirstName(event), 300)}
          error={firstNameError}
          helperText={firstNameError && 'First name cannot be empty'}
        />
        <TextField
          required
          id="outlined-required"
          label="Last Name"
          value={lastName}
          onChange={(event) => _.debounce(updateLastName(event), 300)}
          error={lastNameError}
          helperText={lastNameError && 'Last name cannot be empty'}
        />
      </Box>
      <Box display="flex">
        <TextField
          required
          id="outlined-required"
          label="Phone Number"
          value={phoneNumber}
          onChange={(event) => _.debounce(updatePhoneNumber(event), 300)}
          error={phoneNumberError}
          helperText={phoneNumberHelperText}
        />
        <TextField
          required
          id="outlined-required"
          label="Email Address"
          value={email}
          onChange={(event) => _.debounce(updateEmailAddress(event), 300)}
          error={emailError}
          helperText={emailHelperText}
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
