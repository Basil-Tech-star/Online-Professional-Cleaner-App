import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './screens/HomePage';
import SignupPage from './screens/SignupPage';
import LoginPage from './screens/LoginPage';
import CleanersPage from './screens/CleanersPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cleaners" element={<CleanersPage />} />
      </Routes>
    </Router>
  );
};

export default App;
