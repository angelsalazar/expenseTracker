import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.css';

function Sidebar() {

  function handleLogout(ev) {
    ev.preventDefault();
    console.log('should logout')
  }

  return (
    <aside className="Sidebar">
      <div className="Sidebar__User-Detail">
        <p>Welcome</p>
        <p className="Sidebar__User-Detail__User">John Doe</p>
      </div>
      <nav className="Sidebar__Nav">
        <NavLink
          to="/"
          className="Sidebar__Nav__Item"
          activeClassName="Sidebar__Nav__Item-active">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
          Home
        </NavLink>
        <NavLink
          to="/expenses"
          className="Sidebar__Nav__Item"
          activeClassName="Sidebar__Nav__Item-active">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M5 8h2v8H5zm7 0H9c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 6h-1v-4h1v4zm7-6h-3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 6h-1v-4h1v4z"/>
            <path d="M4 6h16v12H4z" fill="none"/>
            <path d="M2 4v16h20V4H2zm2 14V6h16v12H4z"/>
          </svg>
          Expenses
        </NavLink>
        <span className="Sidebar__Nav__Gap"></span>
        <a
          href="!#"
          className="Sidebar__Nav__Item"
          onClick={handleLogout}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
          </svg>
          Logout
        </a>
      </nav>
    </aside>
  );
}

export default Sidebar;
