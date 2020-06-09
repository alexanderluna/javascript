import React from 'react';
import { withRouter } from 'react-router-dom';
import './styles.sass';

const MenuItem = ({ id, history, match, title, imgUrl, size, link }) => {

  const handleClick = () => (
    history.push(`${match.url}${link}`)
  );

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      history.push(`${match.url}${link}`);
    }
  };

  return (
    <div
      role="button"
      tabIndex={id}
      className={`${size} menu-item`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
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
};

export default withRouter(MenuItem);
