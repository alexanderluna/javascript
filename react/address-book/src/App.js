import React, { useEffect, useState } from 'react';
import SearchBar from "./components/Search/SearchBar";
import CardList from "./components/Card/CardList";
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    (async () => {
      const data = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await data.json();
      setUsers(users);
    })();
  }, []);

  const handleSearchInput = (event) => {
    setSearchValue(event.target.value.toLowerCase());
  }

  const filteredUsersOnSearch = users.filter(user => (
    user.name.toLowerCase().includes(searchValue)
  ))

  return (
    <div className="App">
      <h1>Addressbuch</h1>
      <SearchBar
        handleSearchInput={handleSearchInput}
        searchValue={searchValue}
      />
      <CardList users={filteredUsersOnSearch} />
    </div>
  );
}

export default App;
