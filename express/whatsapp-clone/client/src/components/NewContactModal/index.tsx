import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useContacts } from '../../contexts/ContactsProvider';

interface Props {
  closeModal: Function
}

const NewContactModal: React.FC<Props> = ({ closeModal }) => {
  const [form, setForm] = useState({ id: '', name: '' });
  const { createContact } = useContacts();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createContact(form.id, form.name);
    closeModal();
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prevState) => ({ ...prevState, [name]: value }))
  }

  return (
    <div>
      <Modal.Header closeButton>Create Contact</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>ID</Form.Label>
            <Form.Control
              type="text"
              name="id"
              value={form.id}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button type="submit">Create</Button>
        </Form>
      </Modal.Body>
    </div>
  )
}

export default NewContactModal;
