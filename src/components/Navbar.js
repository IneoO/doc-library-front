import React from 'react';
import IosSearch from 'react-ionicons/lib/IosSearch';
import IosClose from 'react-ionicons/lib/IosClose';
import './navbar.scss';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__container__brand">
          <a className="navbar__container__brand__item" href="/">
            <h1>Items</h1>
          </a>
        </div>
        <div className="navbar__container__right">
          <button type="button" className="navbar__container__right__search">
            <IosSearch className="navbar__container__right__search__icon" fontSize="30px" />
            <span className="navbar__container__right__search__text">Search</span>
          </button>
        </div>
      </div>
      <div className="navbar__search">
        <div className="navbar__search__container">
          <IosSearch className="navbar__search__container__icon" fontSize="40px" />
          <div className="navbar__search__container__search">
            <input className="navbar__search__container__search__input" type="text" />
          </div>
          <IosClose className="navbar__search__container__close" fontSize="40px" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
