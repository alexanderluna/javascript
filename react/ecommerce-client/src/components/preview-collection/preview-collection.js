import React from 'react';

const PreviewCollection = ({ title, items }) => (
  <div className="preview-collection">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((_, index) => index < 4)
        .map(({ id, name }) => (
          <div key={id}>{name}</div>
        ))}
    </div>
  </div>
);

export default PreviewCollection;
