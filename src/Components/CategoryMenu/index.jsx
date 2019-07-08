import React from 'react';

import Categories from '../../Utils/Categories';

import './CategoryMenu.scss';

export default function CategoryMenu() {
  return (
    <ul>
      {Categories.map(category => (
        <li key={category.key}>{category.name}</li>
      ))}
    </ul>
  );
}
