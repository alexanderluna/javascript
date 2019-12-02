import React from 'react';
import './Card.css';

const Card = ({ id, name, email }) => {
  const avatarUrl = () => `https://robohash.org/${id}?set=set1&size=180x180`;

  return (
    <div className="flex-item">
      <img src={avatarUrl()} alt={name} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  )
}

export default Card;