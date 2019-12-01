import React, { useEffect, useState } from 'react';
import CardList from "./components/Card/CardList";
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await data.json();
      setUsers(users);
    };
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <CardList users={users} />
    </div>
  );
}

export default App;
