import React from 'react';
import { NavLink } from 'react-router-dom';

import Categories from '../../Utils/Categories';

import './CategoryMenu.scss';

export default function CategoryMenu() {
  return (
    <nav className="category-menu text-center my-4">
      <ul className="category-menu__list">
        {Categories.map(({ key, name, category }) => (
          <li className="category-menu__item" key={key}>
            <NavLink
              activeClassName="category-menu__link--active"
              className="category-menu__link"
              to={`/feed/${category}`}
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
