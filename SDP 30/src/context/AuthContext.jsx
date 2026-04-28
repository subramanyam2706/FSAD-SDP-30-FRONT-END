import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('career_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // Mock login logic
    let userData = null;
    if (email === 'admin@career.com' && password === 'admin123') {
      userData = { id: 'admin-1', name: 'Admin User', email, role: 'admin' };
    } else if (email === 'student@career.com' && password === 'student123') {
      userData = { id: 'student-1', name: 'Student J', email, role: 'student' };
    }

    if (userData) {
      setUser(userData);
      localStorage.setItem('career_user', JSON.stringify(userData));
      return { success: true };
    }
    return { success: false, message: 'Invalid credentials' };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('career_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, role: user?.role, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
