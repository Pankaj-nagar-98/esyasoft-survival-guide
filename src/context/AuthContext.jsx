import React, { createContext, useContext, useState, useEffect } from 'react';

const SESSION_KEY = 'esyasoft_auth_session';

const ACCOUNTS = [
  {
    usernames: ['admin@esyasoft.com', 'admin', 'pankaj@esyasoft.com', 'pankaj'],
    passwords: ['admin@2026', 'admin123', 'admin'],
    role: 'admin',
    displayName: 'Pankaj (Administrator)',
    email: 'admin@esyasoft.com',
  },
  {
    usernames: ['fresher@esyasoft.com', 'fresher', 'batch2026', 'engineer'],
    passwords: ['batch2026', 'fresher123', 'fresher'],
    role: 'fresher',
    displayName: 'Batch 2026 Engineer',
    email: 'fresher@esyasoft.com',
  }
];

const DEFAULT_USER = {
  username: 'fresher@esyasoft.com',
  role: 'fresher',
  displayName: 'Batch 2026 Engineer',
  email: 'fresher@esyasoft.com',
  loginTime: new Date().toISOString()
};

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem(SESSION_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Auth parse error:', e);
    }
    return DEFAULT_USER;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem(SESSION_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(SESSION_KEY);
    }
  }, [user]);

  const login = (username, password) => {
    const cleanUser = (username || 'fresher@esyasoft.com').trim().toLowerCase();
    const isAdminUser = cleanUser.includes('admin');
    const session = {
      username: cleanUser,
      role: isAdminUser ? 'admin' : 'fresher',
      displayName: isAdminUser ? 'Pankaj (Administrator)' : 'Batch 2026 Engineer',
      email: cleanUser.includes('@') ? cleanUser : `${cleanUser}@esyasoft.com`,
      loginTime: new Date().toISOString()
    };
    setUser(session);
    return { success: true, user: session };
  };

  const logout = () => {
    setUser(null);
  };

  const switchRole = (newRole) => {
    if (newRole === 'admin') {
      setUser({
        username: 'admin@esyasoft.com',
        role: 'admin',
        displayName: 'Pankaj (Administrator)',
        email: 'admin@esyasoft.com',
        loginTime: new Date().toISOString()
      });
    } else {
      setUser({
        username: 'fresher@esyasoft.com',
        role: 'fresher',
        displayName: 'Batch 2026 Engineer',
        email: 'fresher@esyasoft.com',
        loginTime: new Date().toISOString()
      });
    }
  };

  const isAdmin = user?.role === 'admin';

  return (
    <AuthContext.Provider value={{ user, login, logout, switchRole, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}
