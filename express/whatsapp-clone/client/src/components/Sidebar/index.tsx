import React, { useState } from 'react';
import { Tab, Nav, Button, Modal } from 'react-bootstrap';
import Contacts from '../Contacts';
import Conversations from '../Conversations';
import NewContactModal from '../NewContactModal';
import NewConversationModal from '../NewConversationModal';

interface Props {
  id: string;
}

const CONVERSION_KEY = 'conversion';
const CONTACTS_KEY = 'contacts';

const Sidebar: React.FC<Props> = ({ id }) => {

  const [activeKey, setActiveKey] = useState<string | null>(CONVERSION_KEY);
  const [modalOpen, setModalOpen] = useState(false);
  const conversationsOpen = activeKey === CONVERSION_KEY;

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div style={{ width: '25vw', height: '100vh' }} className="d-flex flex-column">
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey={CONVERSION_KEY}>Conversations</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content className="border-right overflow-auto flex-grow-1">
          <Tab.Pane eventKey={CONVERSION_KEY}>
            <Conversations />
          </Tab.Pane>
          <Tab.Pane eventKey={CONTACTS_KEY}>
            <Contacts />
          </Tab.Pane>
        </Tab.Content>

        <div className="p-2 border-top border-right small">
          Your ID: <span className="text-muted">{id}</span>
        </div>

        <Button onClick={openModal} className="rounded-0">
          New {conversationsOpen ? 'Conversation' : 'Contact'}
        </Button>
      </Tab.Container>

      <Modal show={modalOpen} onHide={closeModal}>
        {conversationsOpen && <NewConversationModal closeModal={closeModal} />}
        {!conversationsOpen && <NewContactModal closeModal={closeModal} />}
      </Modal>
    </div>
  )
}

export default Sidebar
