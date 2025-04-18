import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login.jsx';
import AdminPortal from './pages/AdminPortal.jsx';
import { AuthProvider, useAuth } from './context/AuthContext.js';

function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/" />;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Login page */}
          <Route path="/" element={<Login />} />
          
          {/* Admin Portal Route (Protected by PrivateRoute) */}
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <AdminPortal />
              </PrivateRoute>
            }
          />

          {/* You can add other routes like the Dashboard, etc. */}
          {/* Example: */}
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
