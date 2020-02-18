import React from 'react';
import './menu-item.sass';

const MenuItem = ({ title, imgUrl }) => (
  <div className="menu-item">
    <div
      className="background-img"
      style={{ backgroundImage: `url(${imgUrl})` }}
    />
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">subtitle</span>
    </div>
  </div>
);

export default MenuItem;
