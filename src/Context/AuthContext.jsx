// src/context/AuthContext.js

// Initialize users in local storage if they are not already present
const users = [
  {
    email: 'clay@gmail.com',
    password: 'Admin',
    roles: 'admin',
    username: 'Clay',
  },
  {
    email: 'sumit@gmail.com',
    password: 'Admin',
    roles: 'Doer',
    username: 'Sumit',
  },
  {
    email: 'himanshu@gmail.com',
    password: 'Admin',
    roles: 'Doer',
    username: 'Himanshu',
  },
];

// Check if users are already in localStorage, if not, set them
if (!localStorage.getItem('users')) {
  localStorage.setItem('users', JSON.stringify(users));
}



import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Check for a user in localStorage when the app initializes
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem('users'));

    const authenticatedUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (authenticatedUser) {
      setUser(authenticatedUser);
      localStorage.setItem('loggedInUser', JSON.stringify(authenticatedUser)); // Persist user data
    } else {
      alert('Invalid credentials');
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('loggedInUser'); // Remove user data from localStorage on logout
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
