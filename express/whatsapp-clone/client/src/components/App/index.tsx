import React from 'react';
import Login from '../Login';
import Dashboard from '../../pages/Dashboard';
import useLocalStorage from '../../hooks/useLocalStorage';
import './styles.css';
import { ContactsProvider } from '../../contexts/ContactsProvider';
import { ConversationsProvider } from '../../contexts/ConversationsProvider';

const App: React.FC = () => {

  const [id, setId] = useLocalStorage('id');

  return (
    <div className="App">
      <ContactsProvider>
        <ConversationsProvider id={id}>
          {id ? <Dashboard id={id} /> : <Login onIdSubmit={setId} />}
        </ConversationsProvider>
      </ContactsProvider>
    </div>
  );
}

export default App;
