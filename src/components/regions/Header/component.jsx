import React from 'react';

import logo from '@/assets/logo.svg';
import name from '@/assets/name.svg';

import searchIcon from '@/assets/icons/search.svg';
import starIcon from '@/assets/icons/star.svg';
import userIcon from '@/assets/icons/user.svg';

const Header = () => {
  return (
    <header className="header">
      <a href="/" className="logo-section">
        <img className="header-icon icon" alt="Q_TOR" src={logo} />
        <img className="header-icon name" alt="Q_TOR" src={name} />
        <div className="chip">
          <span className="first part">VE3</span>
          <span className="last part">Q17</span>
        </div>
      </a>
      <nav className="navigation-section">
        <a href="/" className="nav-link">CHECKS</a>
        <a href="/" className="nav-link">SCHEDULING</a>
        <a href="/" className="nav-link">REPORTS</a>
      </nav>
      <div className="user-section">
        <img alt="Search" src={searchIcon} />
        <span className="delimeter" />
        <img alt="Favorite" src={starIcon} />
        <img className="user-icon" alt="User" src={userIcon} />
        <span className="drop-icon" />
      </div>
    </header>
  );
};

export default React.memo(Header);
