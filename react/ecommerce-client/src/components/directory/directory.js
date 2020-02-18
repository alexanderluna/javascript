import React, { useState } from 'react';
import MenuItem from '../menu-item/menu-item';
import './directory.sass';

const Directory = () => {
  const [sections] = useState([
    {
      title: 'title1',
      imgUrl: 'https://via.placeholder.com/150',
      id: 1,
      link: 'title1',
    },
    {
      title: 'title2',
      imgUrl: 'https://via.placeholder.com/150',
      id: 2,
      link: 'title2',
    },
    {
      title: 'title3',
      imgUrl: 'https://via.placeholder.com/150',
      id: 3,
      link: 'title3',
    },
    {
      title: 'title4',
      imgUrl: 'https://via.placeholder.com/150',
      id: 4,
      link: 'title4',
    },
    {
      title: 'title5',
      imgUrl: 'https://via.placeholder.com/150',
      id: 5,
      link: 'title5',
    },
  ]);

  return (
    <div className="directory-menu">
      {sections.map((section) => (
        <MenuItem
          key={section.id}
          {...section}
        />
      ))}
    </div>
  );
};

export default Directory;
