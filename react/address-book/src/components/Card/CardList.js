import React from 'react';
import Card from './Card';
import './CardList.css';

const CardList = ({ users }) => (
  <div className="flex-container">
    {users.map(user => (
      <Card key={user.id} {...user} />
    ))}
  </div>
);

export default CardList;
