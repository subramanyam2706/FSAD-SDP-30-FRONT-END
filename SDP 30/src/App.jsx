import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AssessmentEngine from './pages/AssessmentEngine';
import Results from './pages/Results';
import Admin from './pages/Admin';

// Protected Route Component
const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user, loading } = useAuth();

  if (loading) return <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><h2 className="text-gradient">Loading Project...</h2></div>;
  if (!user) return <Navigate to="/login" />;
  if (allowedRoles && !allowedRoles.includes(user.role)) return <Navigate to={user.role === 'admin' ? '/admin' : '/dashboard'} />;

  return children;
};

const AppContent = () => {
  const { user } = useAuth();

  return (
    <div className="app-container" style={{ minHeight: '100vh', width: '100%' }}>
      {user && <Navbar />}
      <div className="main-content">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={
            <ProtectedRoute allowedRoles={['student']}>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/assessment/:id" element={
            <ProtectedRoute allowedRoles={['student']}>
              <AssessmentEngine />
            </ProtectedRoute>
          } />
          <Route path="/results" element={
            <ProtectedRoute allowedRoles={['student']}>
              <Results />
            </ProtectedRoute>
          } />
          <Route path="/admin" element={
            <ProtectedRoute allowedRoles={['admin']}>
              <Admin />
            </ProtectedRoute>
          } />
          <Route path="/careers" element={
            <ProtectedRoute allowedRoles={['student']}>
              <Results />
            </ProtectedRoute>
          } />
          <Route path="/" element={<Navigate to={user ? (user.role === 'admin' ? '/admin' : '/dashboard') : '/login'} />} />
        </Routes>
      </div>
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
