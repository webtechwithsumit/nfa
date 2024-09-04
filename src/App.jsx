// src/App.js
import React from 'react';
import { AuthProvider } from './Context/AuthContext';
import AppRouter from './Router';

const App = () => (
  <AuthProvider>
    <AppRouter />
  </AuthProvider>
);

export default App;
