import { Box, Button, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import _ from 'underscore';

import { useContactListContext } from '../../../components/contact-list-provider';
import AlertDialog from '../../../components/dialog';

interface EditContactFormProps {
  id: string;
}
export default function EditContactForm(
  props: EditContactFormProps
): JSX.Element {
  const { id } = props;
  const { contactList, updateContactList } = useContactListContext();
  const router = useRouter();
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [phoneNumber, setPhoneNumber] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (id) {
      const contact = contactList.filter((c) => c.id.toString() === id)[0];
      setFirstName(contact.firstName);
      setLastName(contact.lastName);
      setPhoneNumber(contact.phoneNumber.toString());
      setEmail(contact.email);
    }
  }, [id]);
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

  const insert = (arr, index, ...newItems) => [
    ...arr.slice(0, index),
    ...newItems,
    ...arr.slice(index),
  ];

  const saveContactInfo = () => {
    let contacts = contactList.filter((c) => c.id.toString() !== id);
    const contactIndex = contactList.findIndex((c) => c.id.toString() === id);
    const contact = {
      id: parseInt(id),
      firstName,
      lastName,
      phoneNumber: parseInt(phoneNumber),
      email,
    };
    contacts = insert(contacts, contactIndex, contact);
    updateContactList(contacts);
    router.push('/');
  };
  const deleteContact = () => {
    const contacts = contactList.filter((c) => c.id.toString() !== id);
    updateContactList(contacts);
    router.push('/');
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
        Save
      </Button>
      <Button
        sx={{ mt: 2.5, mr: 1 }}
        variant="contained"
        color="warning"
        onClick={() => setOpen(true)}
      >
        Delete
      </Button>
      <Button
        sx={{ mt: 2.5 }}
        variant="outlined"
        color="secondary"
        onClick={() => router.push('/')}
      >
        Cancel
      </Button>
      <AlertDialog
        open={open}
        handleAction={() => deleteContact()}
        handleClose={() => setOpen(!open)}
        title="Delete this contact?"
        descriptor="Are you sure you want to delete this contact? This action cannot be undone."
        agreeText="Yes, delete"
        disagreeText="Cancel"
      />
    </Box>
  );
}
