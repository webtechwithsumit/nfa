// src/router.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './Context/AuthContext';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import HomePage from './Pages/HomePage'; // Optional
import ErrorPage from './pages/Errorpage';

const ProtectedRoute = ({ children, roles }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (roles && !roles.includes(user.roles)) {
    return <Navigate to="/error" />;
  }

  return children;
};

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<ProtectedRoute roles={['admin', 'Doer']}><Dashboard /></ProtectedRoute>} />
      <Route path="/admin" element={<ProtectedRoute roles={['admin']}><div>Admin Page</div></ProtectedRoute>} />
      <Route path="/doer" element={<ProtectedRoute roles={['Doer']}><div>Doer Page</div></ProtectedRoute>} />
      <Route path="/another-admin-page" element={<ProtectedRoute roles={['admin']}><div>Another Admin Page</div></ProtectedRoute>} />
      <Route path="/another-doer-page" element={<ProtectedRoute roles={['Doer']}><div>Another Doer Page</div></ProtectedRoute>} />
      <Route path="/error" element={<ErrorPage />} />
      
      {/* Catch-all route for non-existent pages */}
      <Route path="*" element={<Navigate to="/error" />} />
    </Routes>
  </Router>
);

export default AppRouter;
