import { createContext, useContext } from 'react';
import { ContactList } from '../../public/mock-data';

const ContactListContext = createContext({
  contactList: ContactList,
  updateContactList: () => {},
});

export function ContactListProvider({ value, children }) {
  return (
    <ContactListContext.Provider value={value}>
      {children}
    </ContactListContext.Provider>
  );
}

export function useContactListContext() {
  return useContext(ContactListContext);
}
