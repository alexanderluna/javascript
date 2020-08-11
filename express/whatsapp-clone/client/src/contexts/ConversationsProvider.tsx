import React, { useContext, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage';
import { useContacts } from './ContactsProvider';

interface IContact {
  id: string;
  name: string;
}

interface IConversation {
  recipients: Array<IContact>;
  messages: Array<any>;
  selected: boolean;
}

interface IContext {
  conversations: Array<IConversation>;
  selectedConversation: IConversation;
  selectConversation: Function;
  createConversation: Function;
}

interface IProps {
  id: string;
}

interface AddMessageOptions {
  recipients: IContact;
  text: string;
  sender: string;
}

const ConversationContext = React.createContext<IContext>({} as IContext);

export const useConversations = () => {
  return useContext(ConversationContext);
}

export const ConversationsProvider: React.FC<IProps> = ({ id, children }) => {
  const [conversations, setConversations] = useLocalStorage('conversations', []);
  const [selectedConversation, setSelectedConversation] = useState(0);
  const { contacts } = useContacts();

  const createConversation = (recipients: Array<String>) => (
    setConversations((prevState: Array<any>) => (
      [...prevState, { recipients, messages: [] }]
    ))
  )

  const addMessageToConversation = ({ recipients, text, sender }: AddMessageOptions) => {

  }

  const sendMessage = (recipients: IContact, text: string) => {
    addMessageToConversation({ recipients, text, sender: id });
  }

  const formattedConversations = conversations.map((conversation: any, index: Number) => {
    const recipients = conversation.recipients.map((recipientId: string) => {
      const contact = contacts.find(contact => contact.id === recipientId)
      const name = (contact && contact.name) || recipientId;
      return { id: recipientId, name };
    });
    const selected = index === selectedConversation
    return { ...conversation, recipients, selected }
  })

  const value = {
    conversations: formattedConversations,
    selectedConversation: formattedConversations[selectedConversation],
    selectConversation: setSelectedConversation,
    createConversation,
    sendMessage
  }

  return (
    <ConversationContext.Provider value={value}>
      {children}
    </ConversationContext.Provider>
  )
}
