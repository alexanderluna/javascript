import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useConversations } from '../../contexts/ConversationsProvider';

const Conversations: React.FC = () => {
  const { conversations, selectConversation } = useConversations();

  const recipientNamesFor = (conversation: any) => {
    const names = conversation.recipients.map((recipient: any) => (
      recipient.name
    ));
    return names.join(', ');
  }

  return (
    <ListGroup variant="flush">
      {conversations.map((conversation, index) => (
        <ListGroup.Item
          key={index}
          action
          onClick={() => selectConversation(index)}
          active={conversation.selected}
        >
          {recipientNamesFor(conversation)}
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

export default Conversations;
