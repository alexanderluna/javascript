import React, { useContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage';

interface IContact {
  id: string;
  name: string;
}

interface ContextProps {
  contacts: Array<IContact>;
  createContact: Function;
}

const ContactsContext = React.createContext<ContextProps>({} as ContextProps);

export const useContacts = () => useContext(ContactsContext);

export const ContactsProvider: React.FC = ({ children }) => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);

  const createContact = (id: String, name: String) => (
    setContacts((prevState: Array<any>) => ([...prevState, { id, name }]))
  )

  return (
    <ContactsContext.Provider value={{ contacts, createContact }}>
      {children}
    </ContactsContext.Provider>
  )
}
