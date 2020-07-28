import React, { useContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage';

interface ContextProps {
  conversations: Array<any>,
  createConversation: Function
}

const ConversationContext = React.createContext<ContextProps>({} as ContextProps);

export const useConversions = () => useContext(ConversationContext);

export const ConversationsProvider: React.FC = ({ children }) => {
  const [conversations, setConversations] = useLocalStorage('conversations', []);

  const createConversation = (recipients: Array<String>) => (
    setConversations((prevState: Array<any>) => (
      [...prevState, { recipients, messages: [] }]
    ))
  )

  return (
    <ConversationContext.Provider value={{ conversations, createConversation }}>
      {children}
    </ConversationContext.Provider>
  )
}
