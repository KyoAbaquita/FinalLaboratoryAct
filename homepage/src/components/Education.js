import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Education = () => {
  return (
    <div className="container" style={containerStyle}>
      <h1 className="text-center text-success mb-4">Education</h1>

        <div className="cardStyle" style={cardStyle}> 
        <h2 className="text-success">Elementary</h2>
        <ul style={listStyle}>
          <li>Banay Banay Elementary School</li>
        </ul>

        <h2 className="text-success">Junior High School</h2>
        <ul style={listStyle}>
          <li>Pulo National High School</li>
        </ul>

        <h2 className="text-success">Senior High School</h2>
        <ul style={listStyle}>
          <li>AITSA</li>
          <li>St. Ignitius Academy</li>
        </ul>

        <h2 className="text-success">College</h2>
        <ul style={listStyle}>
          <li>Pamantasan ng Cabuyao (UC)</li>
        </ul>
        </div>
    </div>
  );
};

const containerStyle = {
  marginTop: '2rem',
  maxWidth: '800px',
  padding: '0 1rem',
};

const cardStyle = {
  backgroundColor: '#ffffff',
  padding: '1.5rem',
  marginBottom: '1.5rem',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const listStyle = {
  listStyleType: 'none',
  padding: '0',
  marginLeft: '1.5rem',
  fontSize: '1.1rem',
};

export default Education;
