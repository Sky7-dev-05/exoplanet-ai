import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import du Router
import Analyser from './Components/Analyser.jsx';
import About from './Components/About.jsx';
import Dashboard from './Components/Dashboard.jsx';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <Navbar />  {/* Le Navbar est en dehors des routes pour qu'il apparaisse sur toutes les pages */}
      <Routes>
        <Route path="/" element={<Analyser />} />  {/* Page principale */}
        <Route path="/about" element={<About />} />  {/* Page About */}
        <Route path="/dashboard" element={<Dashboard />} />  {/* Page Dashboard */}
      </Routes>
      <Footer />  {/* Le Footer est en dehors des routes pour qu'il apparaisse sur toutes les pages */}
    </Router>
  );
}

export default App;
