import React, { FormEvent, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useContacts } from '../../contexts/ContactsProvider';
import { useConversations } from '../../contexts/ConversationsProvider';

interface Props {
  closeModal: Function;
}

const NewConversationModal: React.FC<Props> = ({ closeModal }) => {
  const [selectedContactIds, setSelectedContactIds] = useState<Array<String>>([]);
  const { contacts } = useContacts();
  const { createConversation } = useConversations();

  const handleCheckboxChange = (contactId: String) => {
    setSelectedContactIds(prevSelectedContactIds => {
      if (prevSelectedContactIds.includes(contactId)) {
        return prevSelectedContactIds.filter(prevId => contactId !== prevId)
      } else {
        return [...prevSelectedContactIds, contactId]
      }
    })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createConversation(selectedContactIds);
    closeModal();
  }

  return (
    <div>
      <Modal.Header closeButton>Create Conversation</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {contacts.map(contact => (
            <Form.Group controlId={contact.id} key={contact.id}>
              <Form.Check
                type="checkbox"
                value={String(selectedContactIds.includes(contact.id))}
                label={contact.name}
                onChange={() => handleCheckboxChange(contact.id)}
              />
            </Form.Group>
          ))}
          <Button type="submit">Create</Button>
        </Form>
      </Modal.Body>
    </div>
  )
}

export default NewConversationModal;
