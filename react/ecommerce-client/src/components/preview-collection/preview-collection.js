import React from 'react';
import CollectionItem from '../collection-item/collection-item';
import './preview-collection.sass';

const PreviewCollection = ({ title, items }) => (
  <div className="preview-collection">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((_, index) => index < 4)
        .map(({ id, name, price, imageUrl }) => (
          <CollectionItem
            key={id}
            name={name}
            price={price}
            imageUrl={imageUrl}
          />
        ))}
    </div>
  </div>
);

export default PreviewCollection;
