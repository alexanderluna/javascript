import React from 'react';
import Login from '../Login';
import useLocalStorage from '../../hooks/useLocalStorage';
import './styles.css';

const App: React.FC = () => {

  const [id, setId] = useLocalStorage('id');

  return (
    <div className="App">
      {id}
      <Login onIdSubmit={setId} />
    </div>
  );
}

export default App;
