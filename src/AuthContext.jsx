import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const userData = localStorage.getItem('userData');
    
    if (token && userData) {
      try {
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Error parsing user data:', error);
        clearAuth();
      }
    }
    setLoading(false);
  }, []);

  const clearAuth = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    setUser(null);
    setIsAuthenticated(false);
  };

  const login = (userData, token) => {
    localStorage.setItem('authToken', token);
    localStorage.setItem('userData', JSON.stringify(userData));
    
    setUser(userData);
    setIsAuthenticated(true);
  };

  const logout = () => {
    clearAuth();
  };

  const register = (userData, token) => {
    login(userData, token); 
  };

  const updateUser = (updatedData) => {
    const currentUser = JSON.parse(localStorage.getItem('userData') || '{}');
    const newUserData = { ...currentUser, ...updatedData };
    
    localStorage.setItem('userData', JSON.stringify(newUserData));
    setUser(newUserData);
  };

  const validateToken = () => {
    const token = localStorage.getItem('authToken');
    if (!token) return false;

    return true;
  };

  const demoLogin = () => {
    const demoUser = {
      id: Date.now(),
      username: 'Демо Пользователь',
      email: 'demo@example.com',
      createdAt: new Date().toISOString(),
      memberSince: new Date().getFullYear().toString(),
      accountType: 'Премиум',
      avatar: '/images/default-avatar.png',
    };
    
    const demoToken = 'demo-token-' + Date.now();
    login(demoUser, demoToken);
    return demoUser;
  };

  const contextValue = {
    isAuthenticated,
    user,
    loading,
    login,
    logout,
    register,
    updateUser,
    demoLogin,
    validateToken,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};