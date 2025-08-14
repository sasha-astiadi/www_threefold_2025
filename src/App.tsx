import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages we will create in the next step
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';

// The Layout component from src/components/Layout can likely be reused
import { Layout } from './components/Layout';

function App() {
  // The background color is applied to the body via tailwind.css, but we can ensure a wrapper has the right context
  return (
    <Router basename={import.meta.env.VITE_APP_BASE_URL || '/'}>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          {/* Add a catch-all route for 404 if needed */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;