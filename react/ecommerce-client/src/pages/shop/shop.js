import React, { useState } from 'react';
import SHOP_DATA from '../../data/shop_data';
import PreviewCollection from '../../components/preview-collection/preview-collection';

const Shop = () => {
  const [collections] = useState(SHOP_DATA);

  return (
    <div>
      {collections.map(({ id, title, items }) => (
        <PreviewCollection
          key={id}
          title={title}
          items={items}
        />
      ))}
    </div>
  );
};

export default Shop;
