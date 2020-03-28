import React from 'react';
import Sidebar from '../Sidebar';
import './style.css';

function Layout({ children }) {
  return (
    <div className="Layout">
      <Sidebar />
      <main className="Layout__Content">
        <div className="Layout__Page-Container">
          {children}
        </div>
      </main>
    </div>
  );
}

export default Layout;
