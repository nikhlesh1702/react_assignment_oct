import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './app/pages/HomePage';
import AboutPage from './app/pages/AboutPage';
import ItemDetailPage from './app/pages/ItemDetailsPage';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/item/:id" element={<ItemDetailPage />} /> {/* New route */}
      </Routes>
    </Router>
  );
}

export default App;