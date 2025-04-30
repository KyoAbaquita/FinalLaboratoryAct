import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education'
import Projects from './components/Projects';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="app" style={appStyle}>
        <nav className="navbar navbar-expand-lg navbar-light" style={navStyle}>
          <div className="container">
            <Link to="/" className="navbar-brand" style={brandStyle}>
              My Portfolio
            </Link>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLinkWithHover to="/" className="nav-link">Home</NavLinkWithHover>
              </li>
              <li className="nav-item">
                <NavLinkWithHover to="/about" className="nav-link">About</NavLinkWithHover>
              </li>
              <li className="nav-item">
                <NavLinkWithHover to="/education" className="nav-link">Education</NavLinkWithHover>
              </li>
              <li className="nav-item">
                <NavLinkWithHover to="/projects" className="nav-link">Projects</NavLinkWithHover>
              </li>
              <li className="nav-item">
                <NavLinkWithHover to="/contact" className="nav-link">Contact</NavLinkWithHover>
              </li>
            </ul>
          </div>
        </nav>

        <div className="container" style={contentStyle}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

const appStyle = {
  backgroundColor: '#f8f9fa',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '2rem 1rem',
};

const navStyle = {
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  padding: '0.5rem 0',
  width: '100%',
  maxWidth: '1000px',
};

const brandStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#007bff',
};

const contentStyle = {
  backgroundColor: '#ffffff',
  padding: '2rem',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  width: '100%',
  maxWidth: '1000px',
  marginTop: '2rem',
};

const NavLinkWithHover = ({ to, children, className }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const hoverStyle = isHovered ? { color: '#0056b3' } : { color: '#007bff' };

  return (
    <Link
      to={to}
      className={className}
      style={{ ...hoverStyle, transition: 'color 0.3s ease' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </Link>
  );
};

export default App;
