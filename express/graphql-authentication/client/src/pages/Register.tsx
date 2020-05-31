import React, { useState } from 'react';
import { useRegisterMutation } from '../generated/graphql';

interface Props {

}

const Register: React.FC<Props> = () => {
  const [register] = useRegisterMutation();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log(username, email, password);
    const response = await register({
      variables: { username, email, password }
    });
    console.log(response);
  }

  return (
    <div>
      <form action="#" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register
