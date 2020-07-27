import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { v4 as uuid } from 'uuid';

interface Props {
  onIdSubmit: React.Dispatch<React.SetStateAction<string>>;
}

const Login: React.FC<Props> = ({ onIdSubmit }) => {
  const [id, setId] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onIdSubmit(id);
  }

  const createNewId = () => {
    onIdSubmit(uuid());
  }

  return (
    <Container className="align-items-center d-flex" style={{ height: '100vh' }}>
      <Form className="w-100" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Enter your ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Insert ID or create a new one"
            value={id}
            onChange={(event) => setId(event.target.value)}
            required
          />
        </Form.Group>
        <Button type="submit" className="mr-2">
          Login
        </Button>
        <Button variant="outline-secondary" onClick={createNewId}>
          Create new ID
        </Button>
      </Form>
    </Container>
  )
}

export default Login;
