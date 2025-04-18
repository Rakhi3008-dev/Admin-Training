import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Layout.css';

export default function Layout({ children }) {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogout = () => {
    // Here, you can clear user authentication data if needed (e.g., remove tokens, clear localStorage, etc.)
    console.log('Logging out...');
    
    // Redirect to login page
    navigate('/login');  
  };

  return (
    <div className="layout-wrapper">
      <div className="layout">
        <nav className="navbar">
          <h2>Admin Portal</h2>
          <div className="navbar-buttons">
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </div>
        </nav>
        <main className="main-content">{children}</main>
      </div>
    </div>
  );
}
