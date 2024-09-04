// src/components/Dashboard.js
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/'); // Redirect to homepage after logout
  };

  return (
    <div>
      <h1>Welcome, {user.username}</h1>
      <button onClick={handleLogout}>Logout</button>

      <nav>
        <ul>
          <li>
            <Link to="/dashboard">Home</Link>
          </li>
          {user?.roles === 'admin' && (
            <>
              <li>
                <Link to="/admin">Admin Page</Link>
              </li>
              <li>
                <Link to="/another-admin-page">Another Admin Page</Link>
              </li>
            </>
          )}
          {user?.roles === 'Doer' && (
            <>
              <li>
                <Link to="/doer">Doer Page</Link>
              </li>
              <li>
                <Link to="/another-doer-page">Another Doer Page</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;
