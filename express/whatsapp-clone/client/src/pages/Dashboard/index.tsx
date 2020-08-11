import React from 'react';
import OpenConversation from '../../components/OpenConversation';
import Sidebar from '../../components/Sidebar';
import { useConversations } from '../../contexts/ConversationsProvider';

interface Props {
  id: string;
}

const Dashboard: React.FC<Props> = ({ id }) => {
  const { selectedConversation } = useConversations();

  return (
    <div style={{ height: '100vh' }} className="d-flex">
      <Sidebar id={id} />
      {selectedConversation && <OpenConversation />}
    </div>
  )
};

export default Dashboard;
