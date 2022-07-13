import { createContext, useContext, useState } from 'react';
import { ContactList } from '../../public/mock-data';

const ContactListContext = createContext({
  contactList: ContactList,
  updateContactList: (contacts) => {},
});

export function ContactListProvider({ children }) {
  const [contactList, setContactList] = useState(ContactList);

  const updateContactList = (contacts) => {
    setContactList(contacts);
  };

  const context = {
    contactList: contactList,
    updateContactList: updateContactList,
  };
  return (
    <ContactListContext.Provider value={context}>
      {children}
    </ContactListContext.Provider>
  );
}

export function useContactListContext() {
  return useContext(ContactListContext);
}
