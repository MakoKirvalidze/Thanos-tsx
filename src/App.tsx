import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Fact from './components/Fact';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">მთავარი</Link></li>
            <li><Link to="/about">შესახებ</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/fact/:factId" element={<Fact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
