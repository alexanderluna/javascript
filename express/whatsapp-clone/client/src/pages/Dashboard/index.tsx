import React from 'react';
import Sidebar from '../../components/Sidebar';
import { ContactsProvider } from '../../contexts/ContactsProvider';
import { ConversationsProvider } from '../../contexts/ConversationsProvider';

interface Props {
  id: string;
}

const Dashboard: React.FC<Props> = ({ id }) => {
  return (
    <ContactsProvider>
      <ConversationsProvider>
        <Sidebar id={id} />
      </ConversationsProvider>
    </ContactsProvider>
  )
};

export default Dashboard;
