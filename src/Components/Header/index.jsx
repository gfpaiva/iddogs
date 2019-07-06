import React from 'react';

import './Header.scss';

export default function Header() {
  return (
    <header className="header bg-secondary color-primary text-center">
      <h1 className="my-0">
        <a href="#iddogs" className="header__logo">IDDogs</a>
      </h1>
    </header>
  );
}
